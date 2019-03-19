import { Directive, OnInit, Inject, ElementRef, Input } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";

@Directive({
  selector: "[modal-trigger]"
})

export class ModalTriggerDirective implements OnInit {
  private htmlElement: HTMLElement
  @Input('modal-trigger') modelId: string;

  constructor(@Inject(JQ_TOKEN) private JQuery: any, ref: ElementRef) {
    this.htmlElement = ref.nativeElement;
  }

  ngOnInit() {
    this.htmlElement.addEventListener('click', event => {
      this.JQuery(`#${this.modelId}`).modal({});
    });
  }
}
