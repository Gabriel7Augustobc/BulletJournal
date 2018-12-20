exports.seed = function(knex, Promise) {
    return knex('notas').del()
      .then(function () {
        return knex('notas').insert([
          {id: 1, title: 'Final das aulas', text: "Final das aulas dia 18/12", data: "2018-12-11", done: false},
          {id: 2, title: 'Entregas Minora', text: "Entregar as três atividades", data: "2018-12-01", done: false},
          {id: 3, title: 'Quarto ano', text: "Finalmente chegou o quarto ano \o/", data: "2018-03-12", done: false}
        ]);
      });
  };