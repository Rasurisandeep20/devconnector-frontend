 
  import { Component, OnInit } from '@angular/core';
  import { ProfileService } from 'src/app/profile/services/profile.service';
  
  @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
  })
  export class DashboardComponent implements OnInit {
  
    constructor(private profileService: ProfileService) { }
  
    flag: Boolean = false;
    ngOnInit(): void {
   
      let userDetails: any = JSON.parse(
        localStorage.getItem('userDetails') || ''
      )
     console.log(userDetails.id);
  
     this.profileService.getProfileByUserId(userDetails.id).subscribe(null,(err) => {
      console.log(err.status);
      if(err.status == 404){
        this.flag = true;
      }
    }); 
    }
  }
  