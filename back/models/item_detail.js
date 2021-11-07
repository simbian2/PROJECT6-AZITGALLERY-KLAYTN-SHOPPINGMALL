const Sequelize = require('sequelize')
const moment = require('moment')

// 추후 상품id 추가할 것
module.exports = class ItemDetail extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            nft_idx:{
                type:Sequelize.INTEGER,
                allowNull:false,
                autoIncrement:true,
                primaryKey:true
            },
            item_info_idx:{
                type:Sequelize.INTEGER,
                allowNull:false,
                //primaryKey:true
            },
            item_detail_idx:{
                type:Sequelize.INTEGER,
                allowNull:false,
            },
            size:{
                type:Sequelize.STRING(30),
            },
            color:{
                type:Sequelize.STRING(30),
            },
            nft:{
                type:Sequelize.STRING(255),
                allowNull:false,
                unique:true
            },
            qty:{
                type:Sequelize.INTEGER,
            },
            item_code:{
                type:Sequelize.STRING(100),
                comment:'item_info에서 받은 item_code + size와 color별 index',
                unique:true
            },
            product_status:{
                type:Sequelize.STRING,
            },
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
    static associate(db){
        db.ItemDetail.belongsTo(db.ItemInfo,{foreignKey:'item_info_idx',targetKey:'item_id'})
        db.ItemDetail.hasMany(db.NftImg,{foreignKey:'nft_img_idx',sourceKey:'nft_idx'})
    }
}
