'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

      await queryInterface.bulkInsert('Airports', [
        {
          name: "Kempegowda International Airport",
          cityId: 1,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: "Pune Lohegaon Airport",
          cityId: 2,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: "Swami Vivekananda Airport",
          cityId: 3,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: "Mangalore Airport",
          cityId: 5,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: "Sri Guru Ram Dass Jee International Airport",
          cityId: 8,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: "Mangaluru International Airport",
          cityId: 1,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        {
          name: "Shivamogga Airport",
          cityId: 1,
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
      ], {})
    },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
