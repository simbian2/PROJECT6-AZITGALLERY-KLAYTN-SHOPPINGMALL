const Sequelize = require('sequelize')
const moment = require('moment')
const { STRING } = require('sequelize')

// 추후 상품id 추가할 것
module.exports = class ItemInfo extends Sequelize.Model{
    static init(sequelize){
        return super.init({ 
            item_info_idx:{
                type:Sequelize.INTEGER(30),
                allowNull:false,
                primaryKey:true
            },
            description:{
                type:Sequelize.TEXT,
            },
            title:{
                type:Sequelize.STRING,
            },
            item_img_idx:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
            registered_at:{
                type:Sequelize.DATE,
                defaultValue:Sequelize.NOW
            },
            product_status:{
                type:Sequelize.STRING,
            },
            sell_type:{
                type:Sequelize.BOOLEAN
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Item_info',
            tableName:'item_info',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}
