import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { CreateProfileComponent } from './components/profile-forms/create-profile/create-profile.component';
import { AddEducationComponent } from './components/profile-forms/add-education/add-education.component';
import { AddExperienceComponent } from './components/profile-forms/add-experience/add-experience.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EducationService } from './services/education.service';
import { ExperienceService } from './services/experience.service';
import { ProfileService } from './services/profile.service';
import { httpInterceptor } from '../shared/interceptors';

@NgModule({
  declarations: [
    CreateProfileComponent,
    AddEducationComponent,
    AddExperienceComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ProfileRoutingModule
  ],
  providers:[EducationService,httpInterceptor,ExperienceService,ProfileService],
})
export class ProfileModule { }
