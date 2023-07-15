import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl=environment.baseUrl
  constructor(private http:HttpClient) { }
GetAllCars(url: any){
  return this.http.get(this.baseUrl+url);
}
PostNewCar(url: any,data:any){
  return this.http.post(this.baseUrl+url,data);
}
UpdateCar(url: any,data:any){
  return this.http.put(this.baseUrl+url,data);
}
DeleteCar(url: any){
  return this.http.delete(this.baseUrl+url);
}
}
