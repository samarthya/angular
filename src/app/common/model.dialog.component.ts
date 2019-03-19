import { Component, Input, Inject } from "@angular/core";
import {JQ_TOKEN} from "./jQuery.service";
@Component({
  selector: "model-dialog",
  templateUrl: "./model.dialog.component.html",
  styleUrls: ["./model.css"],
})

export class ModelDialogComponent {
  @Input() title: string;
  @Input() elementId: string;

  constructor() {

  }
}
