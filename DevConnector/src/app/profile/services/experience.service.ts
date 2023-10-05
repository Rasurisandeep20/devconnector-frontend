import { Injectable } from '@angular/core';
import { IExperience } from '../models/iexperience';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const headerData={
  headers:{'Content-Type':'application/json'},
};
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private httpClient:HttpClient) { }
  endpoint:string='/api/experience';
  createExperience(experience:IExperience):Observable<any>{
    return this.httpClient.post(this.endpoint+'/create', experience,headerData);
  }
}
