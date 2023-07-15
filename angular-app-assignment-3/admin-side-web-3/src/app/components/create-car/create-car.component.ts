import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent implements OnInit {
  @Output() onAddNewCar: EventEmitter<any> = new EventEmitter();  
  CarDetails:any={};
  constructor(
    private http:HttpService,
    private msg:MessageService,
  ) { }

  ngOnInit(): void {
    this.CarDetails.category_id=""
  }
  AddnewCar(){
    let url="server";
    this.http.POstData(url,this.CarDetails).subscribe((res:any)=>{
      console.log(res);
      if(res.status === 200){
        // this.CarDetailForm.reset();
        this.msg.showSuccess("Car has been added successfully!","Car Added");
        setTimeout(() => {
          this.onAddNewCar.emit();
        }, 2000);
      }else{
        this.msg.showError("There is an error while adding car!","Error Accur");
      }

    })
  
  }
}
