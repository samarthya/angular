import { Component } from '@angular/core';

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

}
