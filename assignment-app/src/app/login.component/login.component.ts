import { BooleanInput } from '@angular/cdk/coercion';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggingService } from 'src/app/shared/logging.service';
import { User } from 'src/app/user/user.model';
import { AuthService } from '../shared/auth.service'

@Component({
  selector: 'assignment-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  userName: string = '';
  password: string = '';
  isAdmin: boolean;
  formGroup: FormGroup
  loginForm = this.formBuilder.group({
    username: [],
    password: []
  });
  submitted = false;
  flagsCheck = false;
  message = "";
  allValues: any;
  newServerName = '';
  users!: User[];
  userLogin!: User;

  constructor(private authService: AuthService, private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<LoginComponent>, private loggingService: LoggingService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loggingService
      .getUsers()
      .subscribe((tableauDesUsersObservable) => {
        this.users = tableauDesUsersObservable;
      });
  }

  get credentials() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loggingService.getUserByname(this.credentials.username.value).subscribe(user => {
      this.userLogin = user;
      if (this.credentials.username.value === this.userLogin.userName && this.credentials.password.value === this.userLogin.password) {
        this.message = "Login success"
        this.authService.loggedIn = true;
        this.dialogRef.close();
        this.authService.name = this.userLogin.userName;
        if (this.userLogin.isAdmin){
          this.authService.isAdminn = true;
        }
      }
      else {
        this.message = "Username or password is incorrect";
      }
    });
  }

}



