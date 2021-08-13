import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { returnDate } from '@mobiscroll/angular/dist/js/core/util/datetime';
import {CalendarComponent} from 'angular-customizable-calendar/calendar';
import { RegularizationCalService } from './regularization-cal.service';

// export const routes:Routes[
//  {path:'regularization/status',component:'RegularizationDetailsComponent'}
// ];
@Component({
  selector: 'app-regularization-cal',
  templateUrl: './regularization-cal.component.html',
  styleUrls: ['./regularization-cal.component.css']
})
export class RegularizationCalComponent implements OnInit {
  constructor(private https:HttpClient,private rcservice:RegularizationCalService,private router:Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute=function(){
      return false;
    }
    
  }
  @ViewChild(CalendarComponent) myCalendar!: CalendarComponent;
  public viewTitle!:string;
  public selectable = true;
  public removable = true;
  public eventSource:any;
  public cancel:boolean=true;
  public displayTime!: Date;
  public calendar!:any;
  public i:number=0;
  public lopdates:string[]=[];
  public reqData:any;
  private _fromTime:any;
  public reData:any;
  showMsg: boolean = true;
  

  get fromTime():any{
    return this._fromTime;
  }
  set fromTime(val:any){
    this._fromTime=val;
  } 

  private _toTime:any;
  get toTime():any{
    return this._toTime;
  }
  set toTime(val:any){
    this._toTime=val;
  } 

  private _reason:any;
  get reason():any{
    return this._reason;
  }
  set reason(val:any){
    this._reason=val;
  } 

  private _attendanceType:any;
  get attendanceType():any{
    return this._attendanceType;
  }
  set attendanceType(val:any){
    this._attendanceType=val;
  }
 
public ldata:any;
public lendata:any;
public lengths:any;
public msg:boolean=false;
  ngOnInit() {


    this.rcservice.getRegRequestStatus().subscribe((res: any) => {
      var ldata=res;
      this.lendata= JSON.parse(ldata);
      this. lengths=this.lendata.length;
    });
    
    this.calendar = {
      mode: 'month',
      timeInterval: 30,
      startingDayMonth: 1,
      startingDayWeek: 1,
      startHour: 0,
      endHour: 24,
      locale: 'fr',
      formatDay: 'dd',
      formatDayHeader: 'EEEE',
      formatDayTitle: 'MM dd, yyyy',
      formatWeekTitle: 'MMMM yyyy, \'Week\' w',
      formatMonthTitle: 'MMMM yyyy',
      formatWeekViewDayHeader: 'EEE d',
      formatHourColumn: 'ha',
      allDayLabel: 'hello',
      Color:'red',
      currentDate: new Date(),
      queryMode: 'local',

      dateFormatter: {
        formatMonthViewDay: function (date: Date) {
          return date.getDate().toString();
        },
        formatMonthViewDayHeader: function (date: Date) {
          return 'testMDH';
        },
        formatMonthViewTitle: function (date: Date) {
          return 'testMT';
        },
        formatWeekViewDayHeader: function (date: Date) {
          return 'testWDH';
        },
        formatWeekViewTitle: function (date: Date) {
          return 'testWT';
        },
        formatWeekViewHourColumn: function (date: Date) {
          return 'testWH';
        },
        formatDayViewHourColumn: function (date: Date) {
          return 'testDH';
        },
        formatDayViewTitle: function (date: Date) {
          return 'testDT';
        }
      }
    };
    this.markDisabled(new Date(2021,4,10));
    this.loadEvents();
  }
  
  loadEvents() {
    this.eventSource = this.createRandomEvents();
  
  }
  
  onViewTitleChanged(title:string) {
    this.viewTitle = title;
  }
  
  previous() {
    this.myCalendar.previous();
  }
  
  next() {
    this.myCalendar.next();
  }
  
  onEventSelected(event:any) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
   
  }
  
  changeMode(mode:any) {
    this.calendar.mode = mode;
  }
  
  today() {
    this.calendar.currentDate = new Date();
  }

  applyRequest():void{
    console.log(this.fromTime+" "+this.toTime+" "+this.attendanceType+" "+this.reason);
    console.log(this.lopdates);
    if(this.lopdates.length>1)
    {
      this.fromTime="00:00";
      this.toTime="00:00";
    }
    console.log(this.lopdates[1])
    console.log(this.lopdates[this.lopdates.length-1])
    for(var i=0;i<this.lopdates.length;i++)
    this.rcservice.sendRegRequest(this.fromTime,this.toTime,this.reason,this.attendanceType,this.lopdates[i]).subscribe();
    this.msg=true;
    setTimeout(()=>{
    this.router.navigate(['/Regularization']);
    },1000)

  }
  
  onTimeSelected(ev:any) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0)
      + ', disabled: ' + ev.disabled + "date" +ev.date);
      //this.form=!this.form; 
    //  this.form1=!this.form1;
    var data = ev.selectedTime;
    var month=(data.getMonth()+1);
    var day=(data.getDate());
    var year=(data.getFullYear());
    this.lopdates[this.i]=year+'-'+month+'-'+day;
    this.i++;

  }
  
  onCurrentDateChanged(event: Date) {
    this.displayTime = new Date(event.getTime());
  }
  
  createRandomEvents() {
   
    const events = [];
    const date = new Date();
    // for(let i=0;i<=4;i+=1){
    //  let startTime;
    //  let endTime;
    
    //   startTime = new Date(2021, 3,4+i*7);
    //   endTime = new Date(2021,3,5+i*7);
    //   events.push({
    //     title: 'Weekly-Off',
    //     startTime: startTime,
    //     endTime: endTime,
    //     allDay: true
    //   });
    // }

    // events.push({
    //   title: 'LOP',
    //   startTime: new Date(2021,3,16),
    //   endTime: new Date(2021,3,16),
    //   allDay: true
      
    // });

    // events.push({
    //   title: 'LOP',
    //   startTime: new Date(2021,3,11),
    //   endTime: new Date(2021,3,11),
   
    // });
    // events.push({
    //   title: 'LOP',
    //   startTime: new Date(2021,3,2),
    //   endTime: new Date(2021,3,2),
    //   allDay: true
    // });

    // events.push({
    //   title: 'Half Day Present',
    //   startTime: new Date(2021,3,7),
    //   endTime: new Date(2021,3,7),
    //   allDay: true
    // });
    // events.push({
    //   title: 'Weekl',
    //   startTime: new Date(2021,3,19),
    //   endTime: new Date(2021,3,19),
    //   allDay: true
    // });

    events.push({
      title: 'LOP',
      startTime: new Date(2021, 4,4),
      endTime: new Date(2021, 4,4),
      backgroundColor:'#d41148',
      allDay: true
    },
    {
      title: 'LOP',
      startTime: new Date(2021, 4,5),
      endTime: new Date(2021, 4,5),
      backgroundColor:'red',
      allDay: true
    },{
      title: 'Present',
      startTime: new Date(2021, 4,3),
      endTime: new Date(2021, 4,3),
      backgroundColor:'#f1f1f1',
      allDay: true
    });
    
  return events;
  }
  
  onRangeChanged(ev:any) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  
  }
  

  markDisabled = (date:Date) => {
    const current = new Date();
    return date >= current;
  };

  
  removeCard()
  {
    this.cancel=false;
  }

  removeDate(date:string): void {
    const index = this.lopdates.indexOf(date);
    if (index >= 0) {
      this.lopdates.splice(index, 1);
      //this.lopdates=this.lopdates.filter((item: string) => item != date)
  }  
}


}
