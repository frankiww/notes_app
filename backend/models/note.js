const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Note = sequelize.define('Note', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: true},
    body: {type: DataTypes.STRING, allowNull: false},
});

module.exports = Note;