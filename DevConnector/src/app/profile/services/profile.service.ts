import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient:HttpClient) { }
  endpoint:string='/api/profile';
  getProfileByUserId(userId:number):Observable<any>{
    return this.httpClient.get(this.endpoint+'/user/'+userId);
  }
  createProfile(profile:any):Observable<any>{
    return this.httpClient.post(this.endpoint+'/create',profile);
  }
}
