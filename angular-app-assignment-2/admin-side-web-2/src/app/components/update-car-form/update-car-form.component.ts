import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';

@Component({
  selector: 'app-update-car-form',
  templateUrl: './update-car-form.component.html',
  styleUrls: ['./update-car-form.component.scss']
})
export class UpdateCarFormComponent implements OnInit {
  public updateCarForm:any=FormGroup;
  carData: any;
  constructor(
    private formbuilder: FormBuilder,
    private toasterMsg:ToastMessageService,
    private CarSr:CarService,
    private router:Router,
    private activeRoute:ActivatedRoute
  ) { 
    this.activeRoute.queryParams.subscribe((res:any)=>{
      this.carData=JSON.parse(res.carData);
    })
  }

  ngOnInit(): void {
    this.updateCarForm = this.formbuilder.group({
      model: [null, Validators.compose([Validators.required])],
      make: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])],
      color: [null, Validators.compose([Validators.required])],
      category_id: ["", Validators.compose([Validators.required])]
  });
  this.updateCarForm.setValue({model:this.carData.model,make:this.carData.make,price:this.carData.price,color:this.carData.color,category_id:this.carData.category_id})
  }
  UpdateCarDetails(){
    let url=`server/${this.carData.car_id}`;
    this.CarSr.UpdateCar(url,this.updateCarForm.value).subscribe((res:any)=>{
      console.log(res);
      if(res.error === false){
        this.toasterMsg.SuccessMessage("Car has been Updated successfully!","Car Updated");
        setTimeout(() => {
          this.router.navigate(["/home"]);
        }, 2000);
      }else{
        this.toasterMsg.ErrorMessage("There is an error while Updating car!","Error Accur");
      }

    })
  
  }
}
