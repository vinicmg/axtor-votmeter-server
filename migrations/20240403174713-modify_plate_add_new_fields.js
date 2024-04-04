"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    [
      queryInterface.addColumn(
        "Plates", // table name
        "arquivo", // new field name
        {
          type: Sequelize.TEXT,
          allowNull: true,
        }
      ),
    ];
  },

  async down(queryInterface, Sequelize) {
    [queryInterface.removeColumn("Plates", "arquivo")];
  },
};
