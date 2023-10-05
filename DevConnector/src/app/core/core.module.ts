import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LandingComponent } from './components/layout/landing/landing.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    HeaderComponent,
    LandingComponent,
    FooterComponent
  ]
})
export class CoreModule { }
