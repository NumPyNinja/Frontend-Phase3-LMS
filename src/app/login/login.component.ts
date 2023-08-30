import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Login } from './login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login:Login[];
  form: FormGroup;
  private formSubmitAttempt: boolean;
  showErrorMessage: boolean = false;
  responseData: any;
  public counter : number;//addded by jo for reset password functionality

  constructor(private fb: FormBuilder, private authService: AuthService, 
    private loginService:LoginService, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      userLoginEmailId: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.loginService.getLogin().subscribe((login:Login[])=>{
      this.login=login;
    })

    this.counter=0;//Added for count password
    // this.loginService.makeAuthenticatedRequest().subscribe(
    //   (response) => {
    //     this.responseData = response;
    //     console.log('Response:', response);
    //   },
    //   (error) => {
    //     console.error('Error:', error);
    //   }
    // );
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  async onSubmit() {
    if (this.form.valid) {
      const user = {
        userLoginEmailId: this.form.value.userLoginEmailId,
        password: this.form.value.password
      };
      this.authService.login(user);
    }
    this.formSubmitAttempt = true;
    this.validateCredentials();
  }

  private validateCredentials() {
    this.authService.isLoggedIn.pipe(take(1)).subscribe((isLoggedIn: boolean) =>{
      if (!isLoggedIn) {
        this.showErrorMessage = true;
        if(this.showErrorMessage){
          this.counter++;  
        }
        if (this.counter>=3){
          window.location.href = '/reset-password';
        }
       
      }
    });
  }
}
