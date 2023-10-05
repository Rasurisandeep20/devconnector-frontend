import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/user/models/ilogin';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:ILogin={username:'',password:''
};
constructor(private userService:UserService, private router : Router){}
loginSubmit(){
  console.log('form submitted')
  console.log(this.login);
  this.userService.loginUser(this.login).subscribe(res=>{
   // console.log(JSON.stringify(res));
   localStorage.setItem("userDetails",JSON.stringify(res));
   localStorage.setItem("token",res.token);
this.router.navigate(['/dashboard'])
  },(err)=>console.log(JSON.stringify(err)));

}
  ngOnInit(): void {
  }

}
