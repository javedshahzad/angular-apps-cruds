
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  MyCars: any=[];
  date=new Date();
  constructor(
    private apiSr:ApiService,
    private toaster:ToasterService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.GetmyAllCars();
  }
  GetmyAllCars(){
    let url="server";
    this.apiSr.getDatabyHttp(url).subscribe((response:any)=>{
      if(response.status === 200){
        this.MyCars=response.response;
      }
    })
  }
  deleteCar(id:any){
    let url=`server/${id}`;
    this.apiSr.deleteDatabyHttp(url).subscribe((response:any)=>{
      if(response.status === 200){
        this.toaster.showSuccess("Car has been Deleted successfully!","Car Deleted");
        this.GetmyAllCars();
      }
    })
  }
  updateCar(id:any){
    this.router.navigate(["/update-car/"+id])
  }
}
