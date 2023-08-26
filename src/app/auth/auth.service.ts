import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../login/login';

@Injectable()
export class AuthService {
  url: string = '/apigit st'
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loggedInUserSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");
  loggedInUserId = this.loggedInUserSubject.asObservable();

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}
  login(login: Login) {
    this.http.post<any>(this.url+'/login', login).subscribe(
      (response) => {
        const token = response.token;
        this.loggedIn.next(true);
        this.loggedInUserSubject.next(login.userLoginEmailId);
        localStorage.setItem('token', token);
        this.router.navigate(['/']);
      },
      (error) => {
        // Handle login error
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
      }
    );
  }
  // isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   console.log(token);
  //   return token !== null;
  // }
  
  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}