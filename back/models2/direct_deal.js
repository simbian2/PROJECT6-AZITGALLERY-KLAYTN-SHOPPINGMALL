const Sequelize = require('sequelize');


module.exports = class DirectDeal extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            direct_id:{
                type:Sequelize.INTEGER
            },
            direct_buyer:{
                type:Sequelize.STRING
            },
            start_date:{
                type:Sequelize.DATE
            },
            direct_price:{
                type:Sequelize.INTEGER
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'DirectDeal',
            tableName:'direct_deal',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Auction.belongsTo(db.Item,{foreignKey:'direct_id',targetKey:'item_id'})
    }


}