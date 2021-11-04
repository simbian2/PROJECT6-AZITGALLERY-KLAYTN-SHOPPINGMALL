const Sequelize = require('sequelize');


module.exports = class NftImg extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            nft_img_url:{
                type:Sequelize.TEXT,
                comment:'s3 img url'
            },
            nft_idx:{
                type:Sequelize.INTEGER
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
        db.NftImg.belongsTo(db.Nft,{foreignKey:'nft_idx',targetKey:'id'})
    }

}