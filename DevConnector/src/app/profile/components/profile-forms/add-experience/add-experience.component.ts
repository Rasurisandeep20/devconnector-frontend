import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/profile/models/iexperience';
import { ExperienceService } from 'src/app/profile/services/experience.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
experience:IExperience={jobTitle:'',company:'',location:'',fromDate:new Date(),toDate:new Date(),jobDescription:'',currentJob:false};
  constructor(private experienceService:ExperienceService) { }
  experienceSubmit(){
    console.log('form submitted')
    console.log(this.experience);
    this.experienceService. createExperience(this.experience).subscribe(res=>{
      console.log(JSON.stringify(res));
    },(err)=>console.log(JSON.stringify(err)));
  }
  ngOnInit(): void {
  }

}
