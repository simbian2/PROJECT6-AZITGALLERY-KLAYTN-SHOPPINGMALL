const Sequelize = require('sequelize')
const moment = require('moment')

// 추후 상품id 추가할 것
module.exports = class ItemDetail extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            size:{
                type:Sequelize.STRING(30),
            },
            color:{
                type:Sequelize.STRING(30),
            },
            order_qty:{
                type:Sequelize.INTEGER,
            },
            shipper_idx:{
                type:Sequelize.INTEGER,
            },
            item_code:{
                type:Sequelize.STRING,
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Item_detail',
            tableName:'item_detail',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}
