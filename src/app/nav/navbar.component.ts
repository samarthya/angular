import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styles: [`
    div >ul >li > a.active {
      color: #f97294;
    }
    #idWelcome span {
      color: red;
      margin-left: 20px;
    }
  `]
})

export class NavBarComponent {
  constructor(private authService: AuthService, private router: Router) {

  }
}
