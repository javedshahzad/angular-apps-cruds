
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Cars: any=[];
  isCar:any=1;
  constructor(
    private http:HttpService,
  ) { }

  ngOnInit(): void {
    this.GetmyCars();
  }
  GetmyCars(){
    let url="server";
    this.http.GetData(url).subscribe((response:any)=>{
      if(response.status === 200){
        this.Cars=response.response;
      }
    })
  }
  DeleteCar(event: any){
    console.log(event);
    this.isCar=event;
    this.GetmyCars();
  }
  addnewCar(){
    this.isCar=2;
  }
  onAddCar(event:any){
    this.isCar=1;
    this.GetmyCars();
  }
}
