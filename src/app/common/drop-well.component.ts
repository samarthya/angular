import { Component, Input } from "@angular/core";
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Component({
  selector: "drop-well",
  templateUrl: "./drop-well.component.html",
  styleUrls: ["./dropwell.css"]
})
/**
 * A simple drop-component.
 */
export class DropWellComponent {
  @Input() title: string;
  hide: boolean;

  constructor() {
    this.hide = true;
  }

  public toggleVisibility() {
    this.hide = !this.hide;
    console.log(this.hide)
  }
}
