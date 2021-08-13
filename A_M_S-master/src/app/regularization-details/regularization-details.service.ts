import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
let data = sessionStorage.getItem('pin');



@Injectable({
  providedIn: 'root'
})

export class RegularizationDetailsService {
  public myurl:string='http://api-amsqc.vitalaxis.com/api/Values/RegularizationDetails?pin1='+data;
  constructor(private httpClient:HttpClient) { }
  public getRegRequestStatus(){
    return this.httpClient.get(this.myurl);
  }
}
