'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [{
      address: 'Jl. Ke Pintu Kebaikan',
      postcode: 12345,
      productId: 1,
      userId: 1,
      status: "pending",
      shipment_detail: "Di Gateway pintu kebaikan",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
