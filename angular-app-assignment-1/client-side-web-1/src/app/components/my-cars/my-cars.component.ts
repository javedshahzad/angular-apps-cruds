import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.scss']
})
export class MyCarsComponent implements OnInit {
  AllCars:any=[];
  date=new Date();
  constructor(
    private http:HttpClient

  ) { }

  ngOnInit(): void {
    this.GetAllCars();
  }
GetAllCars(){
  let url=environment.baseUrl+"server";
  this.http.get(url).subscribe((response:any)=>{
    console.log(response);
    if(response.status === 200){
      this.AllCars=response.response;
    }
  })
}
}
