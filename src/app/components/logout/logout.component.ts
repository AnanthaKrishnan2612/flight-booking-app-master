import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(){
    {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('authToken');
      this.router.navigate([""]).then(() => {
        window.location.reload();
      });
    }
  }

}
