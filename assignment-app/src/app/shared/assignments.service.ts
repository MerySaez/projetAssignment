import { Injectable } from '@angular/core';
import { Assignment } from '../assignment/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [];
  devoirRendu = false;
  
  constructor(private logginService:LoggingService,
              private http:HttpClient) { }

 uri = "https://assignment-app-sm.onrender.com/api/assignments";
  getAssignments():Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.uri)

  }
  getAssignment(id:number):Observable<Assignment|undefined> {
    console.log("get by id id = "+id)
    return this.http.get<Assignment>(this.uri + "/" + id)
  }

  addAssignment(assignment:Assignment):Observable<any> {
    return this.http.post<Assignment>(this.uri, assignment);
  }

  updateAssignment(assignment:Assignment):Observable<string> {
    
    this.http.put<Assignment>(this.uri , assignment).subscribe(data => {
      console.log(data);
    });

    return of("Assignment modifié");
  }

  deleteAssignement(assignment:Assignment) :Observable<string> {
    
    this.http.delete<Assignment>(this.uri  + "/" + assignment._id).subscribe(data => {
      console.log(data);
    });
    return of("Assignment supprimé")
  }

}