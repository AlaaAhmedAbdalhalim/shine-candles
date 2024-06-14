import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { ProdDetailsComponent } from './components/prod-details/prod-details.component';

const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    {path:'Home',component:HomeComponent,title:'Home Page'},
    {path:'Categories',component:CategoriesComponent,title:'Categories Page'},
    {path:'Favorites',component:FavoritesComponent,title:'favorites Page'},
    {path:'cart',component:CartComponent,title:'YourCart'},
    {path:'Products',component:ProductListComponent,title:'Products Page'},
    {path:'Best Seller',component:BestSellerComponent,title:'Best seller Page'},
    {path:'ProductDetails/:prodId',component:ProdDetailsComponent,title:'Product Details Page'}
  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
