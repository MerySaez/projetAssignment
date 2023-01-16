let Agenda = require('../model/agenda');

// Récupérer tous les agenda (GET)
function getAgendas(req, res){
    Agenda.find((err, agendas) => {
        if(err){
            res.send(err)
        }

        res.send(agendas);
    });
}

// Récupérer un agenda par son id (GET)
function getAgenda(req, res){
    let agendaId = req.params.id;

    Agenda.findOne({id: agendaId}, (err, agenda) =>{
        if(err){res.send(err)}
        res.json(agenda);
    })
}

// Ajout d'un agenda (POST)
function postAgenda(req, res){
    let agenda = new Agenda();
    agenda.id = req.body.id;
    agenda.nom = req.body.nom;
    agenda.dateDeRendu = req.body.dateDeRendu;
    agenda.auteur = req.body.auteur;
    agenda.matiere = req.body.matiere;

    console.log("POST agenda reçu :");
    console.log(agenda)

    agenda.save( (err) => {
        if(err){
            res.send('cant post agenda ', err);
        }
        res.json({ message: `${agenda.nom} saved!`})
    })
}

// Update d'un agenda (PUT)
function updateAgenda(req, res) {
    console.log("UPDATE recu agenda : ");
    console.log(req.body);
    Agenda.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, agenda) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
          res.json({message: 'updated'})
        }

    });

}

// suppression d'un agenda (DELETE)
function deleteAgenda(req, res) {
    console.log("DELETE recu agenda : "+req.params.id);
    Agenda.findByIdAndRemove(req.params.id, (err, agenda) => {
        if (err) {
            res.send(err);
        }
    })
}



module.exports = { getAgendas, postAgenda, getAgenda, updateAgenda, deleteAgenda };
