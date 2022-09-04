import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full'
  },{
    path: 'game',
    loadChildren: () => import('./gameboard/gameboard.module').then(m => m.GameboardModule),
    pathMatch: 'full'
  },{
    path: '**',
    redirectTo: 'game'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
