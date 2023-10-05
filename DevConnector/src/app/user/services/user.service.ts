import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegister } from '../models/iregister';
import { ILogin } from '../models/ilogin';
const headerData={
  headers:{'Content-Type':'application/json'},
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor (private httpClient:HttpClient) { }
endpoint:string='/api/authenticate';
  registerUser(register:IRegister):Observable<any>{
    return this.httpClient.post(this.endpoint+'/signup',register,headerData);
  }
  loginUser(login:ILogin):Observable<any>{
    return this.httpClient.post(this.endpoint+'/login',login,headerData);
  }
}
