
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Users } from '../account/account.model';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user.model';
@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  user:User[] = [];

  constructor(private http:HttpClient) { }

  uri = "https://assignment-app-sm.onrender.com/api/users";
  log(userName:string, action:string) {
    console.log(`Logging service: User ${userName}  ${action}`);
  }

  addUser(user:User):Observable<any> {
    return this.http.post<User>(this.uri, user);
  }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.uri);

    //return of(this.assignments);
  }

  getUserByname(name:String):Observable<User> {
    return this.http.get<User>(this.uri + "/" + name);
  }

}