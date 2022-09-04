import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TeammatesComponent } from './teammates/teammates.component';
import { GlobalToastrComponent } from './global-toastr/global-toastr.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { TosterService } from './global-toastr/toster.service';

@NgModule({
  declarations: [HeaderComponent, TeammatesComponent, GlobalToastrComponent],
  entryComponents: [HeaderComponent, TeammatesComponent, GlobalToastrComponent],
  imports: [CommonModule, NgbToastModule],
  exports: [HeaderComponent, TeammatesComponent, GlobalToastrComponent],
  providers: [TosterService],
})
export class SharedModule {}
