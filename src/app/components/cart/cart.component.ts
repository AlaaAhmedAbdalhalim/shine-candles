import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { Products } from '../../models/products';
import { ProductService } from '../../Services/product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  inputValue :number=0;
  cartItems: { id: number, quantity: number }[] = [];
  cartProductsWithQuantities: { product: Products, quantity: number }[] = []; // Array to store product details with quantity
  totalPrice: number = 0;
  CartTotal :number=0;
  constructor(private cartService: CartService,
              private productService: ProductService,
            private router : Router) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.logCartProducts();

    });
  }

  private logCartProducts() {
    this.cartProductsWithQuantities = []; 
    this.cartItems.forEach(cartItem => {
      const product = this.productService.getProdById(cartItem.id);
      if (product) {
        this.cartProductsWithQuantities.push({ product: product, quantity: cartItem.quantity });
      }
    });
  }
  decrement(index: number) {
    if (this.cartProductsWithQuantities[index].quantity > 1) {
      this.cartProductsWithQuantities[index].quantity--;
    }
  }

  increment(index: number) {
    if(this.cartProductsWithQuantities[index].quantity< this.cartProductsWithQuantities[index].product.quantity)
      {
        this.cartProductsWithQuantities[index].quantity++;
  }
}
calculateSubtotal(): number {
  let subtotal = 0;
  this.cartProductsWithQuantities.forEach(item => {
      subtotal += item.product.price * item.quantity;
  });
  this.CartTotal=subtotal;
  return subtotal;
}

remove(id : number)
{
    this.cartService.removeFromCart(id); 
  
}
checkout(){
  this.router.navigate(['Checkout']);
}
}