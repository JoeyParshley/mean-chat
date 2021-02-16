'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Joey',
        lastName: 'Parshley',
        email: 'joeyparshley@gmail.com',
        password: 'secret'
      },
      {
        firstName: 'Andrea',
        lastName: 'Parshley',
        email: 'rnam525@gmail.com',
        password: 'secret'
      },
      {
        firstName: 'Maddie',
        lastName: 'Parshley',
        email: 'maddieparshley@gmail.com',
        password: 'secret'
      },
      {
        firstName: 'Joseph',
        lastName: 'Parshley',
        email: 'joeyparshley4@gmail.com',
        password: 'secret'
      },
      {
        firstName: 'RJ',
        lastName: 'Parshley',
        email: 'rjparshley@gmail.com',
        password: 'secret'
      },
      {
        firstName: 'Jake',
        lastName: 'Masys',
        email: 'jakemasys@gmail.com',
        password: 'secret'
      },
      {
        firstName: 'Ethan',
        lastName: 'Masys',
        email: 'ethanmasys@gmail.com',
        password: 'secret'
      },
      {
        firstName: 'Xavier',
        lastName: 'Cole',
        email: 'xaviercole@gmail.com',
        password: 'secret'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
