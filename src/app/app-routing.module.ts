import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { ProdDetailsComponent } from './components/prod-details/prod-details.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { authGuardGuard } from './Guards/auth-guard.guard';

import { BestProductsComponent } from './components/best-products/best-products.component';
import { CartComponent } from './components/cart/cart.component';
import { PaypalButtonComponent } from './components/paypal-button/paypal-button.component';
import { NotFountComponent } from './components/not-fount/not-fount.component';


const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    {path:'Home',component:HomeComponent,title:'Home Page'},
    {path:'Categories',component:CategoriesComponent,title:'Categories Page'},
    {path:'Favorites',component:FavoritesComponent,title:'favorites Page'},
    {path:'ProductDetails/:prodId',component:ProdDetailsComponent,title:'Product Details Page'},
    {path:'Products',component:ProductListComponent,title:'Products Page'},
    {path:'Best Seller',component:BestProductsComponent,title:'Best seller Page'},
    {path:'CatDetails/:catId',component:CatDetailsComponent,title:'Categories Details Page'},

     {path:'YourCart',component:CartComponent,title:'Cart Page'},
     {path:'Checkout',component:PaypalButtonComponent,title:'Checkout Page'}
  ]},
  {path:'Signup',component:SignUpComponent,title:'Sign up Page'},
  {path:'Login',component:LogInComponent,title:'Login Page'},
  {path:'**',component:NotFountComponent,title:'Not Found Page'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
