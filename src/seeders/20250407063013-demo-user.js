'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        userName: 'User 1',
        age: 19,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'User 2',
        age: 20,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        userName: 'User 3',
        age: 21,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'User 4',
        age: 22,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'User 5',
        age: 23,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'User 6',
        age: 24,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'User 7',
        age: 25,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'User 8',
        age: 26,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'User 9',
        age: 27,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'User 10',
        age: 28,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'User 11',
        age: 29,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'User 12',
        age: 30,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
