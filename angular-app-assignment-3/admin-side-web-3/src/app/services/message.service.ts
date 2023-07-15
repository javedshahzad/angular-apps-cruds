import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  option:any={
    timeOut: 3000,
    closeButton:true
  }
    constructor(private toastr: ToastrService) { }
     
  showSuccess(message: string | undefined, title: string | undefined){
      this.toastr.success(message, title,this.option)
  }
  
  showError(message: string | undefined, title: string | undefined){
      this.toastr.error(message, title,this.option)
  }
  
  showInfo(message: string | undefined, title: string | undefined){
      this.toastr.info(message, title,this.option)
  }
  
  showWarning(message: string | undefined, title: string | undefined){
      this.toastr.warning(message, title,this.option)
  }
}
