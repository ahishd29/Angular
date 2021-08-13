import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
let data = sessionStorage.getItem('pin');
@Injectable({
  providedIn: 'root'
})
export class RegularizationCalService {
 
  constructor(private httpClient: HttpClient) {
    
  }
  public sendRegRequest(fromTime:string,toTime:string,reason:string,attendanceType:string,lopDate:string){

   return this.httpClient.get('http://api-amsqc.vitalaxis.com/api/Values/sendRegRequest?fromTime='+fromTime+'&toTime='+toTime+'&reason='+reason+'&attendanceType='+attendanceType+'&lopDate='+lopDate+'&pin='+data)
  }


  public myurl:string='http://api-amsqc.vitalaxis.com/api/Values/RegularizationDetails?pin1='+data;
 
  public getRegRequestStatus(){
    return this.httpClient.get(this.myurl);
  }

}