import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUrl=environment.baseUrl
  constructor(private http:HttpClient) { }
getDatabyHttp(url: any){
  return this.http.get(this.baseUrl+url);
}
postDatabyHttp(url: any,data:any){
  return this.http.post(this.baseUrl+url,data);
}
putDatabyHttp(url: any,data:any){
  return this.http.put(this.baseUrl+url,data);
}
deleteDatabyHttp(url: any){
  return this.http.delete(this.baseUrl+url);
}
}
