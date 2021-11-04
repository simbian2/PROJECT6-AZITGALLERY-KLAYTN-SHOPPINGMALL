const Sequelize = require('sequelize')
const moment = require('moment')

// 추후 상품id 추가할 것
module.exports = class LikeList extends Sequelize.Model{
    static init(sequelize){
        return super.init({ 
            user_idx:{
                type:Sequelize.INTEGER,
                allowNull:false
            },
            item_code:{
                type:Sequelize.INTEGER,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Like_list',
            tableName:'like_list',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}
