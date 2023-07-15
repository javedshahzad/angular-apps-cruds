import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddNewCarComponent } from './components/add-new-car/add-new-car.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';

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
    path:"Add-new-car",
    component:AddNewCarComponent
  },
  {
    path:"update-car/:id",
    component:UpdateCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
