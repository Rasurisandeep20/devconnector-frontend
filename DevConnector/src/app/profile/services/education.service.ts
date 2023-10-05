import { Injectable } from '@angular/core';
import { IEducation } from '../models/ieducation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const headerData={
  headers:{'Content-Type':'application/json'},
};

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor (private httpClient:HttpClient) { }
  endpoint:string='/api/education';
    createEducation(education:IEducation):Observable<any>{
      return this.httpClient.post(this.endpoint+'/create', education,headerData);
    }
}
