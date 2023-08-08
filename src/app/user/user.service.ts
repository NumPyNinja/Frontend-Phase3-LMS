import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = '/api';//'https://lms-admin-rest-service.herokuapp.com/programs';
  users: any;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    //return this.httpClient.get<any>('assets/Users.json')
    return this.httpClient.get<User[]>(this.url+"/users/roles");
  }

  getAllUsers(): Observable<User[]> {
    //return this.httpClient.get<any>('assets/Users.json')
    return this.httpClient.get<User[]>(this.url+"/users");
  }

  addUser(userData:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<any>(this.url+'/users/roleStatus',userData,{headers});
    
  }
}