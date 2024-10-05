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

  // تعديل الدالة لتستقبل الـ id والكمية
  addToCart(productId: number, quantity: number) {
    // جلب المنتج عن طريق الـ id من الـ productService
    const product = this.productService.getProdById(productId);
    
    // إضافة المنتج للسلة مع الكمية
    const cartItem = { ...product, quantity };
    this.cartItems.push(cartItem);
    
    // تحديث الـ Observable
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
  
  