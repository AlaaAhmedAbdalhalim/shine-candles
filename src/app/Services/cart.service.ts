import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductService } from './product.service';
import { CartItems } from '../models/cart-items';
import { Products } from '../models/products';
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private cartItems: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>(this.cartItems);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor(private productService: ProductService) {}

  addToCart(productId: number, quantity: number) {
   
    const product = this.productService.getProdById(productId);
    
    const cartItem = { ...product, quantity };
    this.cartItems.push(cartItem);
   
    this.cartItemsSubject.next(this.cartItems);
  }

  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(productId: number) {
   
    const itemIndex = this.cartItems.findIndex(item => item.id === productId);

    if (itemIndex !== -1) {
     
      this.cartItems.splice(itemIndex, 1);
      this.cartItemsSubject.next(this.cartItems); 
    }
  }
 
  }
  
  