import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameboardComponent } from './gameboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgbAccordionModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: GameboardComponent
  }
]

@NgModule({
  declarations: [
    GameboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgbNavModule,
    NgbAccordionModule,
  ],
  providers: [
  ]
})
export class GameboardModule { }
