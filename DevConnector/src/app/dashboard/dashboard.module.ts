import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardActionComponent } from './components/dashboard-page/dashboard-action/dashboard-action.component';
import { DashboardEducationComponent } from './components/dashboard-page/dashboard-education/dashboard-education.component';
import { DashboardExperienceComponent } from './components/dashboard-page/dashboard-experience/dashboard-experience.component';
import { DashboardComponent } from './components/dashboard-page/dashboard/dashboard.component';
import { ProfileService } from '../profile/services/profile.service';
import { httpInterceptor } from '../shared/interceptors';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardActionComponent,
    DashboardEducationComponent,
    DashboardExperienceComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule
  ],
  providers:[ProfileService,httpInterceptor]
})
export class DashboardModule { }
