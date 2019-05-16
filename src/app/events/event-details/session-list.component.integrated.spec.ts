import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SessionListComponent } from './session-list.component';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService, DropWellComponent } from 'src/app/common';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from '../shared';

describe("SesisonListComponent integrated tests", () => {
  let fixture : ComponentFixture<SessionListComponent>,
  component: SessionListComponent,
  element: HTMLElement,
  debugEle: DebugElement

   beforeEach(async(()=> {
     let mockAuthService = {
       isAuthenticated: () => {
         return true;
       },
       currentUser: {
         userName: 'John',
       }
     };
     let mockVoterService = {
       userHasVoted: () => {
         return true;
       }
     };
     TestBed.configureTestingModule({
       declarations: [
         SessionListComponent,
         UpvoteComponent,
         DurationPipe,
         DropWellComponent
       ],
       imports: [],
       providers: [
         {provide: AuthService, useValue: mockAuthService},
         {provide: VoterService, useValue: mockVoterService}
       ],
     });
   }));

   beforeEach(()=> {
     fixture = TestBed.createComponent(SessionListComponent);
     component = fixture.componentInstance;
      element = fixture.nativeElement;
      debugEle = fixture.debugElement;
   });

   describe(" Initial display is correct.", () => {
     it("It should have the title displayed properly." , () => {
      component.sessions= [{
        name: "Session A", level: "beginner", id: 2,
      presenter: "Saurabh Sharma", duration: 2,
      abstract: " Abstract information", voters: []}];

      component.filterBy = "all";
      component.sortBy = "name";
      component.eventId = 2;

      component.ngOnChanges();
      fixture.detectChanges();

      expect(element.querySelector("[well-title]").textContent).toBe(' Session A ');
     });
   })
});
