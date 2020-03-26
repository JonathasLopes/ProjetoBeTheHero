exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};

/**
 * Codigo para criação de tabelas:
 * 
 * "npx knex migrate:latest
 * 
 * codigo para deletar tabelas:
 * 
 * "npx knex:rollback"
 * 
 * codigo para saber mais sobre comandos:
 * 
 * "npx knex"
 */