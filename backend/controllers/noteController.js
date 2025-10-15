const {Note} = require('../models');

exports.getAllNotes = async(req, res) => {
    try{
        const notes = await Role.findAll();
        res.status(200).json(notes);

    } catch(error){
        console.error(error);
        res.status(500).json({error: 'Ошибка при получении заметок'});
    }
};