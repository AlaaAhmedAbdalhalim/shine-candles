import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
    {path:'Home',component:HomeComponent,title:'Home Page'},
    {path:'Categories',component:CategoriesComponent,title:'Categories Page'},
    {path:'Favorites',component:FavoritesComponent,title:'favorites Page'},
    {path:'cart',component:CartComponent,title:'cart Page'},
   
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
