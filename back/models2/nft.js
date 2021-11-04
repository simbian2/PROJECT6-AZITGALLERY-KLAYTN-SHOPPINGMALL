const Sequelize = require('sequelize');


module.exports = class Nft extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            item_idx:{
                type:Sequelize.INTEGER
            },
            item_nft:{
                type:Sequelize.TEXT
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Nft',
            tableName:'nft',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){
        db.Nft.belongsTo(db.Item,{foreignKey:'item_idx',targetKey:'item_id'}),
        db.Nft.hasMany(db.NftImg,{foreignKey:'nft_idx',sourceKey:'id'}),
        db.Nft.hasOne(db.Deliver,{foreignKey:'nft_idx',sourceKey:'id'})     
    }

}