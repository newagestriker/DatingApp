import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  users: any;
  token: string;

  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.setCurrentUser();
    this.getUsers();
  }

  setCurrentUser(): void {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  getUsers(): void {
    this.http.get('http://localhost:5000/api/users').subscribe(
      (response) => {
        this.users = response;
        console.log(this.users);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
