
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Cars: any=[];
  Currentdate=new Date();
  constructor(
    private CarSr:CarService,
    private toaster:ToastMessageService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.allCars();
  }
  allCars(){
    let url="server";
    this.CarSr.GetAllCars(url).subscribe((response:any)=>{
      if(response){
        this.Cars=response;
      }
    })
  }
  delete(id:any){
    let url=`server/${id}`;
    this.CarSr.DeleteCar(url).subscribe((response:any)=>{
      console.log(response)
      if(response.error === false){
        this.toaster.SuccessMessage("Car has been Deleted successfully!","Car Deleted");
        this.allCars();
      }
    })
  }
  goToUpdate(carData:any){
    var car=JSON.stringify(carData);
    this.router.navigate(["/update"],{
      queryParams: {
        carData: car
      }
  })
  }
}
