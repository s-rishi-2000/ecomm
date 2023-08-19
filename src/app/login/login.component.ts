import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private user:LoginService){}
  // loginForm(data:object):void{
  //   console.warn(data)
  // }
  userLogin = new FormGroup({
    name : new FormControl(''),
    password : new FormControl('')
  })
  submit(){
    this.user.loginUser(this.userLogin.value).subscribe(()=>{});
  }
}
