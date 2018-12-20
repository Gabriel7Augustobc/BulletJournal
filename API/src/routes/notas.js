import knex from "../config/knex";

const requestHandler = (request, reply) => {
  return (
    knex
      .from("notas")
      // .where({ deleted: false })
      .select("id", "title", "text", "data", "done")
      .then(results => reply.response(results))
      .catch(err => console.log(err))
  );
};

const notas = [
  {
    method: "GET",
    path: "/notas",
    handler: (request, reply) => {
      return requestHandler(request, reply);
    }
  },
  {
    method: "GET",
    path: "/notas/",
    handler: (request, reply) => {
      return requestHandler(request, reply);
    }
  },
  {
    method: "POST",
    path: "/notas",
    handler: (request, reply) => {
      try {
        let { title, text } = JSON.parse(request.payload);
        if (title === undefined) {
          title = "";
          return reply.response({ error: "undefined title" }).code(400);
        }
        if (text === undefined) {
          text = "";
        }
        const notas = {
          title: title,
          text: text,
          deleted: false,
          done: false
        };
        return knex
          .into("notas")
          .insert(notas)
          .returning("id")
          .then(result => {
            notas.id = result[0];
            return reply.response({ status: "inserted", data: notas }).code(201);
          })
          .catch(err => {
            return reply.response(err).code(400);
          });
      } catch (err) {
        return reply
          .response({ error: "undefined notas in json object" })
          .code(400);
      }
    }
  },
  {
    method: "PUT",
    path: "/notas/{notas_id}",
    handler: (request, reply) => {
      try {
        const { title, text } = JSON.parse(request.payload);
        const id = request.params.notas_id;
        let notas = {};
        if (title != undefined) {
          notas.title = title;
        }
        if (text != undefined) {
          notas.text = text;
        }
        return knex("notas")
          .where("id", id)
          .update(notas)
          .then(result =>
            knex("notas")
              .where("id", id)
              .select("id", "title", "text", "deleted", "done")
              .then(result =>
                reply.response({ status: "updated", data: result[0] }).code(200)
              )
          )
          .catch(err => reply.response(err).code(401));
      } catch (err) {
        return reply.response(err).code(401);
      }
    }
  },
  {
    method: "PUT",
    path: "/notas/{notas_id}/done",
    handler: (request, reply) => {
      try {
        const id = request.params.notas_id;
        let notas = { done: true };
        return knex("notas")
          .where("id", id)
          .update(notas)
          .then(result =>
            knex("notas")
              .where("id", id)
              .select("id", "title", "text", "deleted", "done")
              .then(result =>
                reply.response({ status: "done", data: result[0] }).code(200)
              )
          )
          .catch(err => reply.response(err).code(401));
      } catch (err) {
        return reply.response(err).code(401);
      }
    }
  },
  {
    method: "PUT",
    path: "/notas/{notas_id}/undone",
    handler: (request, reply) => {
      try {
        const id = request.params.notas_id;
        let notas = { done: false };
        return knex("notas")
          .where("id", id)
          .update(notas)
          .then(result =>
            knex("notas")
              .where("id", id)
              .select("id", "title", "text", "deleted", "done")
              .then(result =>
                reply.response({ status: "undone", data: result[0] }).code(200)
              )
          )
          .catch(err => reply.response(err).code(401));
      } catch (err) {
        return reply.response(err).code(401);
      }
    }
  },
  {
    method: "DELETE",
    path: "/notas/{notas_id}",
    handler: (request, reply) => {
      const id = request.params.notas_id;
      return knex("notas")
        .where("id", id)
        .update({ deleted: true })
        .then(result => {
          console.log(result);
          if (result === 0) {
            return reply
              .response({
                status: "not deleted",
                message: "notas not found!"
              })
              .code(409);
          } else {
            return knex("notas")
              .where("id", id)
              .select("id", "title", "text", "deleted", "done")
              .then(result =>
                reply.response({ status: "deleted", data: result[0] }).code(200)
              );
          }
        })
        .catch(err => reply.response(err).code(401));
    }
  }
];

export default notas;