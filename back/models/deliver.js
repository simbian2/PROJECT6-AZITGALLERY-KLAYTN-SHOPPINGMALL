const Sequelize = require('sequelize')

module.exports = class Deliver extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            itemId:{
                type:Sequelize.INTEGER,
            },
            buyerAddress:{
                type:Sequelize.TEXT,
            },
            buyerPhoneNum:{
                type:Sequelize.INTEGER,
            },
            invoiceNum:{
                type:Sequelize.INTEGER,
            }

        },{
            sequelize,
            timestamps:false,
            underscored:false,
            paranoid:false,
            modelName:'Deliver',
            tableName:'deliver',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }

}