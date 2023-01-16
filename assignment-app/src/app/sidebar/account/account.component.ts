import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'account-component',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  userLogin!: User;
  constructor(public authService:AuthService,) {}

  ngOnInit() {
  }
  
  
}