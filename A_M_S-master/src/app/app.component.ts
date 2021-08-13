
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';  



import { NgCircleProgressModule } from 'ng-circle-progress';
// import * as jspdf from 'jspdf';  
// import html2canvas from 'html2canvas';  
// import { literal } from '@angular/compiler/src/output/output_ast';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {


  products:any;
  product:any;
  

  public rows: Array<{id: string,name:string,age:string}> = [];
  id:string="";
  name:string="";
  age:string="";
  buttonClicked() {
  alert(this.id);

    this.rows.push( {id: this.id,name:this.name,age:this.age} );

    //if you want to clear input
    // this.id = null;
    // this.name = null;
    // this.year = null;
  }



  // constructor(private dataService: DataService) { }
  // ngOnInit() {


  //   this.dataService.sendGetRequest().subscribe(data=>{
  //       this.products=data;
      
  //       console.log(this.products);



  //   })  
  // }










  title = 'Meterial';



  S_Maths:string="Mathamatics";
  S_Sci:string="Science";
  S_CS:string="Computer Science";
  S_SS:string="Social Science";
  


  
//   downloadPdf() {
//     let doc = new jsPDF();
//     doc.addHTML(document.getElementById("card"), function() {
//        doc.save("obrz.pdf");
//     });
// }


barChartOptions: ChartOptions = {
  responsive: true,
};
barChartLabels: Label[] = ['Mathamatics', 'Science', 'Computer Science','Social Science'];
barChartType: ChartType = 'line';
barChartLegend = true;
barChartPlugins = [];

barChartData: ChartDataSets[] = [
  
  { data: [80,90,95,80], label: 'Marks' }

];

  

// public captureScreen()  
// {
//   let data = document.getElementById('contentToConvert') as HTMLCanvasElement;  
//   html2canvas(data).then(canvas => {  
//     // Few necessary setting options  
//     var imgWidth = 208;   
//     var pageHeight = 295;    
//     var imgHeight = canvas.height * imgWidth / canvas.width;  
//     var heightLeft = imgHeight;  

//     const contentDataURL = canvas.toDataURL('image/png')  
//     let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
//     var position = 0;  
//     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
//     pdf.save('MYPdf.pdf'); // Generated PDF   
//   });  
// } 




}
