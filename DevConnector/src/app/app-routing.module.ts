import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/layout/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
{   
  path:'users',
loadChildren: () =>import('./user/user.module').then((m)=>m.UserModule)},
{
  path:'dashboard',
loadChildren: () =>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)},
{
  path:'profile',
loadChildren: () =>import('./profile/profile.module').then((m)=>m.ProfileModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
