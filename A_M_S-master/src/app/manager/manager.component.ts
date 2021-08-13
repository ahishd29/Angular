import { Component, OnInit } from '@angular/core';
import { RegularizationDetailsService } from '../regularization-details/regularization-details.service';
import { HttpClient } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  public reqData:any;
  constructor(private rcservice:RegularizationDetailsService,private https: HttpClient,private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute=function(){
      return false;
      }

   }
 
  ngOnInit(): void {
    this.rcservice.getRegRequestStatus().subscribe((res: any) => {
      var data=res;
      this.reqData= JSON.parse(data);
      console.log(res);
  });
}

status1:string="Approved";
status2:string="Rejected";
date:string="";
dat1:any;

//reqdate:Date=new Date();
url1:string='http://api-amsqc.vitalaxis.com/api/Values/status';
  approve(pin:string,date:string){
    var year=date.slice(6,10);
    var month=date.slice(3,5);
    var day=date.slice(0,2);
    var reqDate=year+"-"+month+"-"+day;
     this.https.get(this.url1+"?pin="+pin+"&status="+this.status1+"&requestDate="+reqDate).subscribe((res: any) => {
         console.log(res);
         
      this.router.navigate(['/Regularization/Request'])
    
         
     });

     
    
 }

  reject(pin:string,date:string){
      var year=date.slice(6,10);
      var month=date.slice(3,5);
      var day=date.slice(0,2);
      var reqDate=year+"-"+month+"-"+day;
     this.https.get(this.url1+"?pin="+pin+"&status="+this.status2+"&requestDate="+reqDate).subscribe((res: any) => {
        console.log(res);
    });

    this.router.navigate(['/Regularization/Request'])
  }

}
