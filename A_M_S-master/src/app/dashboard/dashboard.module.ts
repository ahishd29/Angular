import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { 
constructor(private router:Router){
  this.router.routeReuseStrategy.shouldReuseRoute=function(){
    return false;
  }


}
ngOnInit(){
  window.location.reload();
  }


}

