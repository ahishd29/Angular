import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute=function(){
    return false;
  } 
}

  ngOnInit(): void {
  }

}
