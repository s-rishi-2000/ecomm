import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private register:RegisterService,private router:Router){}

  registerForm = new FormGroup({
    companyname : new FormControl(''),
    name : new FormControl(''),
    email : new FormControl(''),
    mobile : new FormControl(''),
    password : new FormControl('')
  })
  
  submit(){
    this.register.registration(this.registerForm.value).subscribe((result)=> { 
      if(result){
        this.router.navigate(['login'])
      }
    });
  }
}
