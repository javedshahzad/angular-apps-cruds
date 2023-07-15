import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  @Input() cars:any;
  @Output() onDeleteCar: EventEmitter<any> = new EventEmitter();  
  constructor(
    private http:HttpService,
    private msg:MessageService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  delete(id:any){
    let url=`server/${id}`;
    this.http.DeleteData(url).subscribe((response:any)=>{
      console.log(response)
      if(response.status === 200){
        this.onDeleteCar.emit(1);
        this.msg.showSuccess("Car has been Deleted successfully!","Car Deleted");
      }else{
        this.msg.showError("Error accur","Car Not Deleted");
      }
    })
  }
  goToUpdate(carId:any){
    var carId=carId
    this.router.navigate(["/update/"+carId])
  }
}
