import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './components/products/products.component';
import { ProdDetailsComponent } from './components/prod-details/prod-details.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';

import { BestProductsComponent } from './components/best-products/best-products.component';
import { CartComponent } from './components/cart/cart.component';
import { PaypalButtonComponent } from './components/paypal-button/paypal-button.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { NotFountComponent } from './components/not-fount/not-fount.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginAlertComponent } from './components/login-alert/login-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MainLayoutComponent,
    BestSellerComponent,
    CategoriesComponent,
    FavoritesComponent,
    ProductListComponent,
    ProductsComponent,
    ProdDetailsComponent,
    CatDetailsComponent,
    SignUpComponent,
    LogInComponent,
    BestProductsComponent,
    CartComponent,
    PaypalButtonComponent,
    NotFountComponent,
    LoginAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgxPayPalModule,
    BrowserAnimationsModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
