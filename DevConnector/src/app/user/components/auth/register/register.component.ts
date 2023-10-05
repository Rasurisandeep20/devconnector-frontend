import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/user/models/iregister';
import { UserService } from 'src/app/user/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:IRegister={username:'',email:'',password:'',
password2 :''};
constructor(private userService:UserService,private router:Router){}
registerSubmit(){
  console.log('form submitted')
  console.log(this.register);
  this.userService.registerUser(this.register).subscribe(res=>{
    console.log(JSON.stringify(res));
    this.router.navigate(['/dashboard'])
  },(err)=>console.log(JSON.stringify(err)));
}
  ngOnInit(): void {
  }

}
