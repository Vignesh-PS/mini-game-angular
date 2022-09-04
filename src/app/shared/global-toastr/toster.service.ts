import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TosterService {

  toasts: any[] = [];

  constructor() { }

  show(msg: string, options: any = {}) {
    this.toasts.push({msg,  ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }


}
