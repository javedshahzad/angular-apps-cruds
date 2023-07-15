import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit {
  totalCars:any=[];
  constructor(
    private http:HttpClient

  ) { }

  ngOnInit(): void {
    this.cars();
  }
cars(){
  let url=environment.baseUrl+"server/";
  this.http.get(url).subscribe((response:any)=>{
    console.log(response);
    if(response.status === 200){
      this.totalCars=response.response;
    }
  })
}

}
