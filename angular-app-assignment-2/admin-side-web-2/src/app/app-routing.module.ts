import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { UpdateCarFormComponent } from './components/update-car-form/update-car-form.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path:"AddCar",
    component:CreateCarComponent
  },
  {
    path:"update",
    component:UpdateCarFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
