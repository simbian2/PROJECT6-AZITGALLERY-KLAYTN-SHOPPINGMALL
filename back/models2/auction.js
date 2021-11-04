const Sequelize = require('sequelize')
const moment = require('moment')

// 추후 상품id 추가할 것
module.exports = class Auction extends Sequelize.Model{
    static init(sequelize){
        return super.init({ 
            start_price:{
                type:Sequelize.INTEGER(30),
                allowNull:false,
            },
            registered_at:{
                type:Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
                get: function(){
                    return moment(this.getDataValue('date')).format('Y-M-D')
                }
            },
            end_date:{
                type:Sequelize.DATE,
            },
            product_id:{
                type:Sequelize.INTEGER(10),
                allowNull:false,
            },
            if_extended:{
                type:Sequelize.STRING,
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Auction',
            tableName:'auction',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Auction.belongsTo(db.Item,{foreignKey:'product_id',targetKey:'item_id'})
        db.Auction.hasMany(db.BidHistory,{foreignKey:'auc_id',sourceKey:'id'})
    }
}
