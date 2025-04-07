'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    userName: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};