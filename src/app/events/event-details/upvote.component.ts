import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "upvote",
  templateUrl: "./upvote.component.html",
  styleUrls: ['./upvote.css']
})

export class UpvoteComponent {
  @Input() count: number;
  @Input() set voted(val){
    this.iconColor = val? 'red': 'white';
  }

  @Output() vote = new EventEmitter();
  iconColor: string;

  OnClick() {
    this.vote.emit({});
    this.voted = !this.voted;
  }
}
