import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {

  public CreateCarForm:any=FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private toastMsg:ToastMessageService,
    private CarSr:CarService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.CreateCarForm = this.formbuilder.group({
      model: [null, Validators.compose([Validators.required])],
      make: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])],
      color: [null, Validators.compose([Validators.required])],
      category_id: ["", Validators.compose([Validators.required])]
  });
  }
  AddnewCar(){
    let url="server";
    this.CarSr.PostNewCar(url,this.CreateCarForm.value).subscribe((res:any)=>{
      console.log(res);
      if(res.error === false){
        // this.CreateCarForm.reset();
        this.toastMsg.SuccessMessage("Car has been added successfully!","Car Added");
        setTimeout(() => {
          this.router.navigate(["/home"]);
        }, 2000);
      }else{
        this.toastMsg.ErrorMessage("There is an error while adding car!","Error Accur");
      }

    })
  
  }
}
