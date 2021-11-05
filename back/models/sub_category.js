const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = class SubCategory extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            category_idx:{
                type:Sequelize.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                unique:true
            },
            item_code:{
                type:Sequelize.STRING(100),
            },
            sub_category_code:{
                type:Sequelize.STRING(100), 
            },
            sub_category_name:{
                type:Sequelize.STRING(30),
            },
        },{
            sequelize,
            timestamps:false,
            modelName:'SubCategory',
            tableName:'subcategory',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    static associate(db){

    }
}