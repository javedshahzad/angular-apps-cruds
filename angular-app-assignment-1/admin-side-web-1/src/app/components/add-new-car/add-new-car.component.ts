import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.scss']
})
export class AddNewCarComponent implements OnInit {
  public addCarForms:any=FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private toaster:ToasterService,
    private apiSr:ApiService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.addCarForms = this.formbuilder.group({
      model: [null, Validators.compose([Validators.required])],
      make: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])],
      color: [null, Validators.compose([Validators.required])],
      category_id: ["", Validators.compose([Validators.required])]
  });
  }
  AddnewCar(){
    let url="server";
    this.apiSr.postDatabyHttp(url,this.addCarForms.value).subscribe((res:any)=>{
      console.log(res);
      if(res.status === 200){
        // this.addCarForms.reset();
        this.toaster.showSuccess("Car has been added successfully!","Car Added");
        setTimeout(() => {
          this.router.navigate(["/home"]);
        }, 2000);
      }else{
        this.toaster.showError("There is an error while adding car!","Error Accur");
      }

    })
  
  }
}
