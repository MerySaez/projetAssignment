import { Injectable } from '@angular/core';
import { Agenda } from '../sidebar/agenda/agenda.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendasService {
    agendas:Agenda[] = [];
  
  constructor(private logginService:LoggingService,
              private http:HttpClient) { }

 uri = "http://localhost:8010/api/agendas";
  getAgendas():Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.uri)

  }
  getAgenda(id:number):Observable<Agenda|undefined> {
    console.log("get by id id = "+id)
    return this.http.get<Agenda>(this.uri + "/" + id)
  }

  addAgenda(agenda:Agenda):Observable<any> {
    return this.http.post<Agenda>(this.uri, agenda);
  }

  updateAgenda(agenda:Agenda):Observable<string> {
    
    this.http.put<Agenda>(this.uri , agenda).subscribe(data => {
      console.log(data);
    });

    return of("agenda modifié");
  }

  deleteAgenda(agenda:Agenda) :Observable<string> {
    
    this.http.delete<Agenda>(this.uri  + "/" + agenda._id).subscribe(data => {
      console.log(data);
    });
    return of("Agenda supprimé")
  }

}