import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-update-car-form',
  templateUrl: './update-car-form.component.html',
  styleUrls: ['./update-car-form.component.scss']
})
export class UpdateCarFormComponent implements OnInit {
  updateCar:any={};
  CAR_ID: any | null;
  constructor(
    private http:HttpService,
    private msg:MessageService,
    private navigateRouter:Router,
    private routeParams:ActivatedRoute
  ) { 
    this.CAR_ID=this.routeParams.snapshot.paramMap.get("carId");
    this.onGetOneCarDetails(this.CAR_ID);
  }

  ngOnInit(): void {
   
  }
  onGetOneCarDetails(carId:any){
    let url=`server/${this.CAR_ID}`;
    this.http.GetData(url).subscribe((response:any)=>{
      console.log(response);
      if(response.status === 200){
        this.updateCar=response.response;
      }
    })
  }
  onUpdateCar(){
    let url=`server/${this.updateCar.car_id}`;
    this.http.UpdateData(url,this.updateCar).subscribe((res:any)=>{
      console.log(res);
      if(res.status === 200){
        this.msg.showSuccess("Car has been Updated successfully!","Car Updated");
        setTimeout(() => {
          this.navigateRouter.navigate(["/home"]);
        }, 2000);
      }else{
        this.msg.showError("There is an error while Updating car!","Error Accur");
      }

    })
  
  }
}
