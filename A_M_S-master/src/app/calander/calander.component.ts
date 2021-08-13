import { Component, OnInit, ViewChild } from '@angular/core';
import {CalendarComponent} from 'angular-customizable-calendar/calendar';
import {Router} from '@angular/router'


@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent implements OnInit {

  constructor(private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute=function(){
    return false;
  } 
}

  
@ViewChild(CalendarComponent) myCalendar!: CalendarComponent;
public viewTitle!:string;
public eventSource:any;
public displayTime!: Date;
public calendar!:any;
 
ngOnInit() {
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
  this.markDisabled(new Date(2021,4,12));
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

onTimeSelected(ev:any) {
  console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0)
    + ', disabled: ' + ev.disabled);
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
  //     backgroundColor:'red',
  //     allDay: true
  //   });
  // }

//   var arraydata:any[]=[];
//   for(var i=0;i<5;i++)
//   {
//     arraydata[i]={title:'lop',startTime:new Date(2021, 4,4), endTime: new Date(2021, 4,4),backgroundColor:'#d41148',allDay: true};
//   }
//  events.push(arraydata);
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
  return date > current;
};
}
