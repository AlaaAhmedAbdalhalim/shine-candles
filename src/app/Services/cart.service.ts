/* import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartData = new BehaviorSubject<{ id: number, quantity: number, productDetails?: any }[]>([]);
  currentCartData = this.cartData.asObservable();

  constructor(private productService: ProductService) {}

  addToCart(id: number, quantity: number) {
    const currentCart = this.cartData.getValue();
    const itemIndex = currentCart.findIndex(item => item.id === id);
  
    if (itemIndex > -1) {
      currentCart[itemIndex].quantity += quantity;
      this.cartData.next(currentCart);
    } else {
      this.productService.getProdById(id)?.subscribe(productDetails => {
        currentCart.push({ id, quantity, productDetails });
        this.cartData.next(currentCart);
      });
    }
  }
  

  getCartItems() {
    return this.cartData.asObservable();
  }

  clearCart() {
    this.cartData.next([]);
  }
} */
