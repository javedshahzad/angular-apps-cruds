import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl=environment.baseUrl
  constructor(private http:HttpClient) { }
  GetData(url: any){
    return this.http.get(this.baseUrl+url);
  }
  POstData(url: any,data:any){
    return this.http.post(this.baseUrl+url,data);
  }
  UpdateData(url: any,data:any){
    return this.http.put(this.baseUrl+url,data);
  }
  DeleteData(url: any){
    return this.http.delete(this.baseUrl+url);
  }
}
