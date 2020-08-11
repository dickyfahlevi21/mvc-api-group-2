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
      orders.belongsTo(models.products, {foreignKey: .orders.productId});
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