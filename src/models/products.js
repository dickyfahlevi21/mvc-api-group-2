'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.hasMany(models.orders, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      products.belongsTo(models.users, { foreignKey: products.userId });
    }
  };
  products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    weight: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};