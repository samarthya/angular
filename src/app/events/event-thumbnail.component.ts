import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IEvent } from "./shared";

@Component({
  selector: "event-thumbnail",
  template: `
    <div>
      <div class="well hoverwell thumbnail">
        <h2>{{ event.name | uppercase }}</h2>
        <div>Date: {{ event.date }}</div>
        <div>Time: {{ event.time }}</div>
        <div>Price: {{ event.price | currency }}</div>
      </div>
      <hr/>
    </div>
  `
})
/**
 * Input properties, Output properties and template reference.
 */
export class EventThumbnailComponent {
  /**
   * Input property that takes a value.
   * Passing data into the child component.
   */
  @Input() public event: IEvent;
  @Output() public eventClick = new EventEmitter();
}
