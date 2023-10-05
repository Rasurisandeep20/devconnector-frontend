
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.url.includes('signup') || request.url.includes('login')){
      console.log('inside the token interceptor for registered login');
      return next.handle(request);
    }
    if(localStorage.getItem('token') == null){
      console.log("inside token null condition");
      this.router.navigate(['/user/login']);
    }

    else{
      console.log("token added");
      request = request.clone({
      headers: request.headers.set(
        'authorization',
        'Bearer ' + localStorage.getItem('token') || ''
       ),
      });
    }
      return next.handle(request);
    }
  }
