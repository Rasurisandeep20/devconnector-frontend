import { Component, OnInit } from '@angular/core';
import { IEducation } from 'src/app/profile/models/ieducation';
import { EducationService } from 'src/app/profile/services/education.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {
 education:IEducation={schoolName:'',degreeName:'',fieldOfStudy:'',fromDate:new Date(),toDate:new Date(),programDescription:'',};
  constructor(private educationService:EducationService) { }
  educationSubmit(){
    console.log('form submitted')
    console.log(this.education);
    this.educationService. createEducation(this.education).subscribe(res=>{
      console.log(JSON.stringify(res));
    },(err)=>console.log(JSON.stringify(err)));
  }
  ngOnInit(): void {
  }

}
