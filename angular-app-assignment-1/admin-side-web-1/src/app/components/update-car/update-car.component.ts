import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.scss']
})
export class UpdateCarComponent implements OnInit {
  public Updateform:any=FormGroup;
  carDetails: any;
  carID: any;
  constructor(
    private formbuilder: FormBuilder,
    private toaster:ToasterService,
    private apiSr:ApiService,
    private router:Router,
    private activeRoute:ActivatedRoute
  ) { 
    this.carID = this.activeRoute.snapshot.paramMap.get("id");
    this.GetSingleCar(this.carID);
  }
  
  ngOnInit(): void {
    this.Updateform = this.formbuilder.group({
      model: [null, Validators.compose([Validators.required])],
      make: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])],
      color: [null, Validators.compose([Validators.required])],
      category_id: ["", Validators.compose([Validators.required])]
  });
  }
  GetSingleCar(id:any){
    let url=`server/${this.carID}`;
    this.apiSr.getDatabyHttp(url).subscribe((res:any)=>{
      console.log(res);
      if(res.status === 200){
        this.carDetails=res.response;
        this.Updateform.controls["model"].setValue(this.carDetails.model);
        this.Updateform.controls["make"].setValue(this.carDetails.make);
        this.Updateform.controls["price"].setValue(this.carDetails.price);
        this.Updateform.controls["color"].setValue(this.carDetails.color);
        this.Updateform.controls["category_id"].setValue(this.carDetails.category_id);
      }
    })
  }
  Update(){
    let url=`server/${this.carDetails.car_id}`;
    this.apiSr.putDatabyHttp(url,this.Updateform.value).subscribe((res:any)=>{
      console.log(res);
      if(res.status === 200){
        this.toaster.showSuccess("Car has been Updated successfully!","Car Added");
        setTimeout(() => {
          this.router.navigate(["/home"]);
        }, 2000);
      }else{
        this.toaster.showError("There is an error while Updating car!","Error Accur");
      }

    })
  
  }

}
