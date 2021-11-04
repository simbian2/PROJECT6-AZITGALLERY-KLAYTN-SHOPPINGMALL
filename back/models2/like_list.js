const Sequelize = require('sequelize');


module.exports = class LikeList extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            item_nft:{
                type:Sequelize.STRING(100),
            },
            like_idx:{
                type:Sequelize.INTEGER
            }
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
    static associate(db){
        db.LikeList.belongsTo(db.User,{foreignKey:'like_idx',targetKey:'id'})
    }
}