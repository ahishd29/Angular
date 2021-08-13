import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label,Color } from 'ng2-charts';
import { BarchartService } from './barchart.service';




@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  constructor(private dataService: BarchartService,private router:Router){
      this.router.routeReuseStrategy.shouldReuseRoute=function(){
        return false;    
      }  
  }


  products:any;
  data1:any;

  public barChartData: ChartDataSets[] = [];

  ngOnInit(): void {
  



  this.dataService.sendGetRequest().subscribe(data=>{
    this.products=data;
    this.data1= JSON.parse(this.products);
    this.barChartData=[{data:[this.data1[2].Present,this.data1[1].Present,this.data1[0].Present],label: 'Present',backgroundColor:'#f4862c'},
    {data:[this.data1[2].Lop,this.data1[1].Lop,this.data1[0].Lop],label: 'LOP',backgroundColor:'#d41148'},
    {data:[this.data1[2].Leave,this.data1[1].Leave,this.data1[0].Leave],label: 'Leave',backgroundColor:'#6f2277'}]
  
console.log(this.data1);
})}

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { 
      yAxes: [{
         scaleLabel: {
            display: true,
            labelString: 'Days'
         }
      }]
   }
  }
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = ['Mar', 'Feb', 'Jan'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  
}
