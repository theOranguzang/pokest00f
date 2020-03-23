import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokelistComponent } from './pokelist/pokelist.component';

const routes: Routes = [
  { path: '', redirectTo: '/poke', pathMatch: 'full' },
  { path: 'poke', component: PokelistComponent }, 
  { path: '**', component: PokelistComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
