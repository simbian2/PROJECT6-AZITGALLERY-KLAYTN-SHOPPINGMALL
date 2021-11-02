const Sequelize = require('sequelize')

module.exports = class Deliver extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            itemId:{
                type:Sequelize.INTEGER,
            },
            orderer:{
                type:Sequelize.STRING
            },
            receiver:{
                type:Sequelize.STRING
            },
            buyerAddress:{
                type:Sequelize.TEXT,
            },
            phoneNum:{
                type:Sequelize.INTEGER,
            },
            postNum:{
                type:Sequelize.INTEGER,
            },
            memo:{
                type:Sequelize.TEXT
            },
            inputStatus:{
                type:Sequelize.STRING 
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