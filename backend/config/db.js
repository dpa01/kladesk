import {Sequelize} from "sequelize"

const db = new Sequelize("kladesk","root","P4ssword1234!@#$",{
    host:"localhost",
    dialect:"mysql"
})

export default db;