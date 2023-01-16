import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AgendasService } from 'src/app/shared/agendas.service';
import { Agenda } from '../agenda.model';

@Component({
  selector: 'app-add-agenda',
  templateUrl: './add-agenda.component.html',
  //styleUrls: ['./add-assignment.component.css'],
})
export class AddAgendaComponent implements OnInit {

  nomDevoir: string = '';
  dateDeRendu!: Date;
  nomAuteur: string = '';
  matiere: string = '';
  dataSource: MatTableDataSource<Agenda>
  constructor(private agendasService:AgendasService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.nomDevoir + ' a rendre le ' + this.dateDeRendu+this.matiere);
    const newAgenda = new Agenda();
    newAgenda.nom = this.nomDevoir;
    newAgenda.dateDeRendu = this.dateDeRendu;
    newAgenda.id = Math.floor(Math.random()*100000000);
    newAgenda.auteur = this.nomAuteur;
    newAgenda.matiere = this.matiere;


    this.agendasService.addAgenda(newAgenda)
      .subscribe(reponse => {
        console.log(reponse.message);
      });
  }
}