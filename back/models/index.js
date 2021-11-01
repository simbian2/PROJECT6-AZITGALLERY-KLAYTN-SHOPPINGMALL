'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const Auction = require('./auction');
const Item = require('./items');
const User = require('./user')
const Deliver = require('./deliver')

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Auction = Auction;
db.Item = Item;
db.User = User;
db.Deliver = Deliver;



User.init(sequelize)
Auction.init(sequelize);
Item.init(sequelize);
Deliver.init(sequelize);



Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
