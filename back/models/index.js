'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const AuctionHistory = require('./auction_history');
const Auction = require('./auction');
const Category = require('./category');
const DirectDeal = require('./direct_deal');
const ItemDetail = require('./item_detail');
const ItemImg = require('./item_img');
const ItemInfo = require('./item_info');
const Item = require('./item');
const LikeList = require('./like_list');
const NftImg = require('./nft_img');
const OrderDetail = require('./order_detail');
const Order = require('./Order');
const Seller = require('./seller');
const ShipInfo = require('./ship_info');
const SubCategory = require('./sub_category');
const User = require('./user');


const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.AuctionHistory = AuctionHistory
db.Auction = Auction
db.Category = Category
db.DirectDeal = DirectDeal
db.ItemDetail = ItemDetail
db.ItemImg = ItemImg
db.ItemInfo = ItemInfo
db.Item = Item
db.LikeList = LikeList
db.NftImg = NftImg
db.OrderDetail = OrderDetail
db.Order = Order
db.Seller = Seller
db.ShipInfo = ShipInfo
db.SubCategory = SubCategory
db.User = User

AuctionHistory.init(sequelize)
Auction.init(sequelize)
Category.init(sequelize)
DirectDeal.init(sequelize)
ItemDetail.init(sequelize)
ItemImg.init(sequelize)
ItemInfo.init(sequelize)
Item.init(sequelize)
LikeList.init(sequelize)
NftImg.init(sequelize)
Order.init(sequelize)
OrderDetail.init(sequelize)
Seller.init(sequelize)
ShipInfo.init(sequelize)
SubCategory.init(sequelize)
User.init(sequelize)






Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
