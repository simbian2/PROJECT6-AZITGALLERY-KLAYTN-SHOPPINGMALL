const Sequelize = require('sequelize')

module.exports = class Auction extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            auction_idx:{
                type:Sequelize.INTEGER,
            },
            end_date:{
                type:Sequelize.DATE,

            },
            if_extended:{
                type:Sequelize.BOOLEAN,
            },
            start_date:{
                type:Sequelize.DATE,
                defaultValue:sequelize.literal('now()') 
            },  
        },{
            sequelize,
            timestamps:false,
            modelName:'Auction',
            tableName:'auction',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Auction.belongsTo(db.ItemInfo,{foreignKey:'auction_idx',targetKey:'item_id'})
        db.Auction.hasMany(db.AuctionHistory,{foreignKey:'auc_history_idx',sourceKey:'auction_idx'})
    }
}