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

  /**
   * Returns the classes to apply in case of
   * the dropdown button.
   */
  public getToggleClasses(): string {
    if (!this.hide) {
      return "fa-arrow-circle-up fa-2x";
    }else {
      return "fa-arrow-circle-down fa-2x"
    }
  }
}
