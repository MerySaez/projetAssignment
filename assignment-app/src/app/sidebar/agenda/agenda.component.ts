import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { AgendasService } from 'src/app/shared/agendas.service';
import { Agenda } from './agenda.model';
import { first } from 'rxjs';
import { User } from 'src/app/user/user.model';

@Component({
  selector: 'agenda-component',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
})
export class AgendaComponent implements OnInit {
  titre = 'Mon application sur les agenda';
  displayedColumns: string[] = ['name','dateDeRendu','auteur','matiere'];
  agendas!: Agenda[];
  agendaSelectionne!: Agenda;
  dataSource: MatTableDataSource<Agenda>
  apiResponse:any = [];
  agendaTransmis!: Agenda | undefined;
  route: any;
  userLogin!: User;

  constructor(public agendasService: AgendasService, public authService:AuthService,) { 
  }
  
  ngOnInit(): void {
    
    this.agendasService.getAgendas()
    .pipe(first())
    .subscribe(res => {
      this.apiResponse = res;
      this.dataSource = new MatTableDataSource<Agenda>(res);
    })
  }


  onAgendaClicke(agenda: Agenda) {
    this.agendaSelectionne = agenda;
  }

  isAdmin():boolean {
    return this.authService.loggedIn;
  }

}