const { DataTypes } = require('sequelize');

export const Product = sequelize.define('products', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: DataTypes.FLOAT,
  image: DataTypes.STRING,
});

module.exports = (sequelize) => Product;