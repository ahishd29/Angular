import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { ChartsModule } from 'ng2-charts';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {CalanderComponent} from './calander/calander.component';
import { DonutComponent } from './donut/donut.component';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { NgCalendarModule  } from 'angular-customizable-calendar';
import { BarchartComponent } from './barchart/barchart.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceBarchartComponent } from './attendance-barchart/attendance-barchart.component';
import { RegularizationComponent } from './regularization/regularization.component';
import { RegularizationCalComponent } from './regularization-cal/regularization-cal.component';
import { RegularizationDetailsComponent } from './regularization-details/regularization-details.component';
import { ManagerComponent } from './manager/manager.component';
import { ToastrModule } from 'ngx-toastr';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const appRoutes: Routes = [
  {  },
];


@Injectable({
  providedIn: 'root'
})

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    DonutComponent,
    CalanderComponent,
    BarchartComponent,
    AttendanceComponent,
    AttendanceBarchartComponent,
    RegularizationComponent,
    RegularizationCalComponent,
    RegularizationDetailsComponent,
    ManagerComponent,
  ],

  imports: [ 
    MbscModule, 
    BrowserModule,
    MatSliderModule,
    MatRippleModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatSortModule,

    MatTableModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTreeModule,
    OverlayModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    MatGridListModule,
    MatInputModule,
    MatDividerModule,
    A11yModule,
    ChartsModule,
    MatSelectModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    ToastrModule,
 NgCalendarModule,
    MatDatepickerModule,
        NgCircleProgressModule.forRoot({
      "backgroundColor": "#F1F1F1",
      "backgroundPadding": -18,
      "radius": 60,
      "toFixed": 2,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#FF6347",
      "innerStrokeColor": "#32CD32",
      "innerStrokeWidth": 1,
      "startFromZero": false}),



  ],


  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]



})


export class AppModule {

  private REST_API_SERVER = "https://reqres.in/api/users?page=2";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

}