'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2),
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      isbn: {
        type: Sequelize.STRING(100),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};
