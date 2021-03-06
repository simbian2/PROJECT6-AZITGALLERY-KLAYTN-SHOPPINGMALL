const Sequelize = require('sequelize')
const moment = require('moment')

// 추후 상품id 추가할 것
module.exports = class NftImg extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            nft_img_idx:{
                type:Sequelize.INTEGER,
            },
            nft_img_link:{
                type:Sequelize.TEXT,
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Nft_img',
            tableName:'nft_img',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.NftImg.belongsTo(db.ItemDetail,{foreignKey:'nft_img_idx',targetKey:'nft_idx'})
    }
}
