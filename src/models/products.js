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
<<<<<<< HEAD
      products.hasMany(models.orders, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      products.belongsTo(models.users, { foreignKey: products.userId });
=======
      posts.hasMany(models.orders, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      posts.belongsTo(models.users, { foreignKey: products.userId });
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
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