const Sequelize = require('sequelize');


module.exports = class BuyList extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            item_nft:{
                type:Sequelize.STRING(100),
            },
            buy_date:{
                type:Sequelize.DATE,
                defaultValue:Sequelize.NOW
            },
            buy_idx:{
                type:Sequelize.INTEGER
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Buy_list',
            tableName:'buy_list',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.BuyList.belongsTo(db.User,{foreignKey:'buy_idx',targetKey:'id'})
    }

}