'use strict';
const { v4: uuidv4 } = require('uuid');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        id: uuidv4(),
        name: 'Produto 1',
        price: 10.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "104eb5e2-90c2-4c60-a6c7-7647b64dd78a"
      },
      {
        id: uuidv4(),
        name: 'Produto 2',
        price: 19.99,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "104eb5e2-90c2-4c60-a6c7-7647b64dd78a"
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};