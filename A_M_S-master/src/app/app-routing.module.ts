import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login';

import {DashboardComponent} from './dashboard/dashboard.component';

import { AttendanceComponent } from './attendance/attendance.component';
import { RegularizationComponent } from './regularization/regularization.component';
import {RegularizationDetailsComponent} from './regularization-details/regularization-details.component'
import { ManagerComponent } from './manager/manager.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
{path:"Attendance",component:DashboardComponent},
{path:"Attendance-Details",component:AttendanceComponent},
{path:"Regularization",component:RegularizationComponent},
{path:"Regularization/Status",component:RegularizationDetailsComponent},
{path:"Regularization/Request",component:ManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'}),
  RouterModule.forRoot(routes, { useHash: true })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
