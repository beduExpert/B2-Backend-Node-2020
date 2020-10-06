const { DataTypes } = require('sequelize');
const { Product } = require('./Product.js');

const Review = sequelize.define('reviews', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  content: DataTypes.TEXT,
  productId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'products',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
});

Review.hasOne(Product, { foreignKey: 'productId', key: 'id' });

module.exports = (sequelize) => Review;