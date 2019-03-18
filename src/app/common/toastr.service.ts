import { Injectable, InjectionToken } from "@angular/core";



export interface IToastr {
  success(message: string, title ?: string): any;
  warning(message: string, title ?: string): any;
  info(message: string, title ?: string): any;
  error(message: string, title ?: string): any;
}

export let TOASTR_TOKEN = new InjectionToken<IToastr>('toastr');
