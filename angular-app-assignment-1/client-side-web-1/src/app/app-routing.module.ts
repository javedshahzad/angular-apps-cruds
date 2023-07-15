import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCarsComponent } from './components/my-cars/my-cars.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"my-cars",
    pathMatch: 'full'
  },
  {
    path: 'my-cars',
    component:MyCarsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
