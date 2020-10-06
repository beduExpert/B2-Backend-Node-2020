const { Sequelize } = require('sequelize');

// Importing models
const Product = require('./models/Product');
const Review = require('./models/Review');

// Database connection
const sequelize = new Sequelize('ecommerce-api', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
});

// Getting models
const models = [
  Product,
  Review,
];

// Registering models into Sequelize
for (let model of models) {
  model(sequelize);
}

module.exports = sequelize;