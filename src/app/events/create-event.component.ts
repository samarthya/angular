import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  templateUrl: './create-event.component.html'
})
export class CreateEventComponent {
  isDirty: boolean = false;

  constructor(private routerService: Router){

  }

  onCancel() {
    this.routerService.navigate(['/events']);
  }

}
