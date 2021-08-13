import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';

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



@NgModule({
    imports: [
        CommonModule,
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
        ChartsModule,
        NgCircleProgressModule
   
        
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {}
