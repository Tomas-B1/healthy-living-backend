exports.up = function (knex) {
    return knex.schema
    .createTable("users", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
      .createTable("workouts", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("description", 1000).notNullable();
        table.string("product_img").notNullable();
        table.string("muscle").notNullable();
        table.string("difficulty").notNullable();
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
      .createTable('schedule', (table) => {
        table.uuid('id').primary();
        table
          .uuid('user_id')
          .references('users.id')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        table
          .uuid('workout_id')
          .references('workouts.id')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        table.string('DayOfWeek').notNullable();
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      });
  };
  
  exports.down = function (knex) {
    return knex.schema
    .dropTable("users")
    .dropTable("workouts")
    .dropTable("schedule")
  };
