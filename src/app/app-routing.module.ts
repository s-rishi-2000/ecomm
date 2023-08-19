import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { authGuard } from './auth.guard';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    component:RegisterComponent,
    path:"register",
  },
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  // { path: '', component: HomeComponent },
  {
    component:HomeComponent,
    path:"home",
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
  {
    component:SellerPageComponent,
    path:"seller-page",
    canActivate:[authGuard]
  },
  {
    component:UserPageComponent,
    path:"user-page",
  },
  {
    component:AboutusComponent,
    path:"aboutus",
  },
  {
    component:FooterComponent,
    path:"footer",
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
