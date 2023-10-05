import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './components/profile-forms/create-profile/create-profile.component';
import { AddEducationComponent } from './components/profile-forms/add-education/add-education.component';
import { AddExperienceComponent } from './components/profile-forms/add-experience/add-experience.component';

const routes: Routes = [
  { path:'create-profile',component:CreateProfileComponent},
 { path:'add-education',component:AddEducationComponent},
 { path:'add-experience',component:AddExperienceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
