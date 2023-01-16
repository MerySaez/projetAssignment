import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component/login.component';
import { AuthService } from './shared/auth.service';
import { MatTab } from '@angular/material/tabs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application Home';

  constructor(public authService:AuthService, private router:Router, public dialog: MatDialog) {}

  boutonActive = false ; 

  openModal() {
    //this.modal.open();
    this.boutonActive = true
    this.dialog.open(LoginComponent);
    this.boutonActive = false

  }

  logout () {
    this.authService.loggedIn = false;
    this.router.navigateByUrl('');
    this.authService.isUser = false;
    this.authService.isAdminn = false;
  }
}