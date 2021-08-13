import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
let data = sessionStorage.getItem('pin');
@Injectable({
  providedIn: 'root'
})

export class BarchartService {


  private REST_API_SERVER = "http://api-amsqc.vitalaxis.com/api/Values/getbgstatus?pin="+data;
 
  
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}

