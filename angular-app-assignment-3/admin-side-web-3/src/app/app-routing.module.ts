import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
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
    path:"update/:carId",
    component:UpdateCarFormComponent
  },
  {
    path:"**",
    redirectTo:"home",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
