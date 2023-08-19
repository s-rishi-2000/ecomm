import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import {FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
// import { sellerlogin } from '../data-type';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  constructor(private seller: SellerService,private router:Router){}
  ngOnInit():void{
    this.seller.reloadSeller()
  }
  // submit(data:any):void{
  //   console.log(data.value)
  //   // this.seller.sellerLogin(data).subscribe((result)=>{
  //   //   console.warn(result)
  //   // });
  // }
  loginSeller = new FormGroup({
    name : new FormControl(''),
    password : new FormControl('')
  })
  login(){
    // console.log('loginSeller', this.loginSeller);
    // console.warn(this.loginSeller.value),
    this.seller.sellerLogin(this.loginSeller.value)
  }
}


// .subscribe((result)=>{
//   if(result){
//     this.router.navigate(['seller-page'])
//   }
// });