import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerComponent } from './seller/seller.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:"home",
  },
  {
    component:SellerAuthComponent,
    path:"seller-auth",
  },
  {
    component:SellerComponent,
    path:"seller",
  },
  {
    component:HeaderComponent,
    path:"header",
  },
  {
    component:LoginComponent,
    path:"login",
  },
  {
    component:CartComponent,
    path:"cart",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
