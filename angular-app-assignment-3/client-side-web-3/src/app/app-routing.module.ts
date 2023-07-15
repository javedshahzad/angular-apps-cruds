import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCarsComponent } from './components/all-cars/all-cars.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"allCars",
    pathMatch: 'full'
  },
  {
    path:"allCars",
    component:AllCarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
