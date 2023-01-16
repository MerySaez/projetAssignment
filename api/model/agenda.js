let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AgendaSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    auteur:String,
    matiere:String,
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Agenda', AgendaSchema );