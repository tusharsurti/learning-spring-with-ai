import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingSpots } from './parking-spots/parking-spots';

const routes: Routes = [
  { path: 'parking-spots', component: ParkingSpots }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
