import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('cars', table =>{
        table.increments('id').primary();
        table.string('placa', 7).notNullable().unique();
        table.string('chassi', 17).notNullable().unique();
        table.integer('renavam', 11).notNullable().unique();
        table.string('modelo').notNullable();
        table.string('marca').notNullable();
        table.integer('ano', 4).notNullable(); 
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('cars');
}

