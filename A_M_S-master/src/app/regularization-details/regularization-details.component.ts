import { Component, OnInit } from '@angular/core';
import { RegularizationDetailsService } from './regularization-details.service';

@Component({
  selector: 'app-regularization-details',
  templateUrl: './regularization-details.component.html',
  styleUrls: ['./regularization-details.component.css']
})

export class RegularizationDetailsComponent implements OnInit {
  public reqData:any;
  constructor(private rcservice:RegularizationDetailsService) { }
 
  ngOnInit(): void {
    this.rcservice.getRegRequestStatus().subscribe((res: any) => {
      var data=res;
      this.reqData= JSON.parse(data);
      console.log(res);
    });
      
  }
}
