import { Injectable } from "@angular/core";

declare let toastr: any;

@Injectable()
export class ToastrService {
  public success(message: string, title ?: string) {
    toastr.success(message, title);
  }

  public warning(message: string, title ?: string) {
    toastr.warning(message, title);
  }

  public info(message: string, title ?: string) {
    toastr.info(message, title);
  }
}
