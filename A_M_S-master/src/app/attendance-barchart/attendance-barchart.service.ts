import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendanceBarchartService {

  constructor(private httpClient: HttpClient) {
    
   }
   public attendanceDetailsRequest(myurl:string,fromdate:any,todate:any,pin:any){
    return this.httpClient.get(myurl,{
      params:{
        fromdate,todate,pin
      }
    });
   }
}

       