import {sequelize, DataTypes} from "./sequelize";

const user = sequelize.define('user', {
    username : DataTypes.TEXT,
    password : DataTypes.TEXT,
    role : DataTypes.TEXT
})

export default user