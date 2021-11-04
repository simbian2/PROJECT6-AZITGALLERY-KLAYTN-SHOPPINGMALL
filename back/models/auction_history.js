const Sequelize = require('sequelize')

module.exports = class AuctionHistory extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            auction_idx:{
                type:Sequelize.INTEGER,
            },
            bidder:{
                type:Sequelize.STRING(20),
            },
            bid_date:{
                type:Sequelize.DATE,
                defaultValue:Sequelize.NOW,
                get:function(){
                    return moment(this.getDataValue('date')).format('YYYY-MM-DD-hh-mm-dd')
                }                
            },
            bid_price:{
                type:Sequelize.STRING(20),
            },
            start_price:{
                type:Sequelize.STRING(20),
            }           
        },{
            sequelize,
            timestamps:true,
            modelName:'AuctionHistory',
            tableName:'auctionhistory',
            paranoid:true,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){

    }
}