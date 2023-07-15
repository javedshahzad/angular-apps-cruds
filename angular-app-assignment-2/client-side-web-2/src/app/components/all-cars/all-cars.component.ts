import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit {
  AllavailCars:any=[];
  Currentdate=new Date();
  constructor(
    private http:HttpClient

  ) { }

  ngOnInit(): void {
    this.AllAvaiableCars();
  }
AllAvaiableCars(){
  let url=environment.baseUrl+"server";
  this.http.get(url).subscribe((response:any)=>{
    console.log(response);
    if(response){
      this.AllavailCars=response;
    }
  })
}

}
