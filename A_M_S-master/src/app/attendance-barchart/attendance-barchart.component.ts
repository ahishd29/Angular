import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {MatTableDataSource} from '@angular/material/table';
import { $ } from 'protractor';
import { threadId } from 'node:worker_threads';
import { HttpClient } from '@angular/common/http';
import { AttendanceBarchartService } from './attendance-barchart.service';


export interface PeriodicElement {
  attendanceDate: string;
  inTime: string;
  outTime:string;
  totalBreak:string;
  totalHours:string;
}



@Component({
  selector: 'app-attendance-barchart',
  templateUrl: './attendance-barchart.component.html',
  styleUrls: ['./attendance-barchart.component.css']
})

export class AttendanceBarchartComponent implements OnInit {
  pindata = sessionStorage.getItem('pin');
  ELEMENT_DATA: PeriodicElement[] = [];
  graph:boolean=false;
  table:boolean=false;
  format:boolean=false;
  displayedColumns: string[] = ['attendanceDate', 'inTime', 'outTime','totalBreak','totalHours'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private _fromdate:any;
  get fromdate():any{
    return this._fromdate;
  }
  set fromdate(val:any){
    this._fromdate=val;
  }
  private _todate:any;
  get todate():any{
    return this._todate;
  }
  set todate(value:any){
    this._todate=value;
  }
 
  data:any;
  data1:any;

  public barChartLabels: Label[] = [];
  public barChartData: ChartDataSets[] = [];
  
  url:string='http://api-amsqc.vitalaxis.com/api/Values/getdate';
  constructor(private router:Router,private https:HttpClient,private abservice:AttendanceBarchartService) { }

  ngOnInit(): void {
  }

  public generatereport(){ 
 

    this.format=false;
    this.graph=false;
    var workTimes:any=[];
    var breakTimes:any=[];
    var dateLabels:Label[]=[];
    var outTimes:string[]=[];
    var inTimes:string[]=[];
    var totalHours:string[]=[];
    var totalBreak:string[]=[];
    var datearray:string[]=[];
    this.abservice.attendanceDetailsRequest(this.url,this.fromdate.toISOString(),this.todate.toISOString(),this.pindata).subscribe((res: any) => {
           this.data=res;
           console.log(this.data);
           this.data1= JSON.parse(this.data);
           console.log(this.data1.length);
           for(var i=0;i<this.data1.length;i++)
           {
           dateLabels[i]=this.data1[i].date.slice(0,10);
           workTimes[i]=this.data1[i].TotalWorkTime;
           breakTimes[i]=this.data1[i].TotalBreakTime;
           outTimes[i]=this.data1[i].outtime.slice(0,8);
           inTimes[i]=this.data1[i].intime.slice(0,8);
           datearray[i]=this.data1[i].date.slice(0,10);
           totalHours[i]=Math.floor(workTimes[i]/60)+':'+workTimes[i]%60;
           totalBreak[i]=Math.floor(breakTimes[i]/60)+':'+breakTimes[i]%60;
           }
           this.barChartLabels=dateLabels;
           this.format=!this.format;
           this.graph=!this.graph;
           this.barChartData=[
            {data:workTimes,label:'WorkingTime',backgroundColor:'blue'},
            {data:breakTimes,label:'BreakTime',backgroundColor:'red'}
          ];
      
          for(i=0;i<this.data1.length;i++)
          this.ELEMENT_DATA[i]={attendanceDate:datearray[i], inTime:inTimes[i], outTime: outTimes[i],totalBreak:totalBreak[i],totalHours:totalHours[i]};
        });
} 

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
 public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  showgraph(){
    this.graph=!this.graph;
    this.table=!this.table;
  }
  showtable(){
    this.table=!this.table;
    this.graph=!this.graph;
  }
  
}
