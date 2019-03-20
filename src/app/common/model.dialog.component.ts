import { Component, Input, Inject, ViewChild, ElementRef } from "@angular/core";
import {JQ_TOKEN} from "./jQuery.service";
@Component({
  selector: "model-dialog",
  templateUrl: "./model.dialog.component.html",
  styleUrls: ["./model.css"],
})

export class ModelDialogComponent {
  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modelContainer') ref: ElementRef;



  constructor(@Inject(JQ_TOKEN) private JQuery: any) {}

  private dismissDialog(){
    this.JQuery(this.ref.nativeElement).modal('hide');
  }
}
