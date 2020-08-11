'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      users.hasMany(models.products, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      users.hasMany(models.orders, {
=======
      authors.hasMany(models.products, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      authors.hasMany(models.orders, {
>>>>>>> 445eeeb48b1f4bb57f42eaad3d1f2464ac8bb58c
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  };
  users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    full_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};