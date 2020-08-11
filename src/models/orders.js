'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orders.belongsTo(models.users, {foreignKey: orders.userId});
<<<<<<< HEAD
      orders.belongsTo(models.products, {foreignKey: orders.productId});
=======
      orders.belongsTo(models.products, {foreignKey: .orders.productId});
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
    }
  };
  orders.init({
    address: DataTypes.STRING,
    postcode: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    shipment_detail: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};