exports.up = function(knex, Promise) {
    return knex.schema.createTable("notas", function(table) {
      table.increments("id");
      table.string("title", 25).notNullable();
      table.text("text").notNullable();
      table.date("data").notNullable();
      table.boolean("done");
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("notas");
  };