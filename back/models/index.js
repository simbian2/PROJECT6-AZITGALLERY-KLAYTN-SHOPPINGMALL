'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const Auction = require('./auction');
const Item = require('./items');
const User = require('./user');
const Deliver = require('./deliver');
const BuyList = require('./buy_list');
const LikeList = require('./like_list');
const Nft = require('./nft');
const NftImg = require('./nft_img');
const BidHistory = require('./bid_history');
const DirectDeal = require('./direct_deal');

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
db.BuyList = BuyList;
db.LikeList = LikeList;
db.Nft = Nft;
db.NftImg = NftImg;
db.BidHistory = BidHistory;
db.DirectDeal = DirectDeal;


User.init(sequelize)
Auction.init(sequelize);
Item.init(sequelize);
Deliver.init(sequelize);
BuyList.init(sequelize);
LikeList.init(sequelize);
Nft.init(sequelize);
NftImg.init(sequelize);
BidHistory.init(sequelize);
DirectDeal.init(sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
