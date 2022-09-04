import { Component, OnInit, TemplateRef } from '@angular/core';
import { TosterService } from './toster.service';

@Component({
  selector: 'app-global-toastr',
  templateUrl: './global-toastr.component.html',
  styleUrls: ['./global-toastr.component.scss'],
  host: {'class': 'toast-container position-fixed top-0 end-0 p-3', 'style': 'z-index: 1200'}
})
export class GlobalToastrComponent implements OnInit {

  constructor(public toastr: TosterService) { }

  ngOnInit(): void {
  }

  isTemplate(toast: any) { return toast instanceof TemplateRef; }

}
