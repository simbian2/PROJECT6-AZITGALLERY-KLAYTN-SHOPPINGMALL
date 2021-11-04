const Sequelize = require('sequelize');


module.exports = class BidHistory extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            auc_id:{
                type:Sequelize.INTEGER
            },
            bidder:{
                type:Sequelize.STRING
            },
            bid_date:{
                type:Sequelize.DATE
            },
            bid_price:{
                type:Sequelize.INTEGER
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'BidHistory',
            tableName:'bid_history',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.BidHistory.belongsTo(db.Auction,{foreignKey:'auc_id',targetKey:'id'})
    }

}