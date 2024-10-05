import { Component } from '@angular/core';
import { Products } from '../../models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { FavouriteService } from '../../Services/favourite.service';
import { CartService } from '../../Services/cart.service';


@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrl: './prod-details.component.css'
})
export class ProdDetailsComponent {
  ProdDetailsId : number;
  inputValue :number = 0;
  prodDetails :Products |undefined = undefined;
  sharedValue: any;
  
  constructor (private activatedRouter : ActivatedRoute,
               private product : ProductService,
               private router : Router,
               private favService :FavouriteService,
              private cartService: CartService )       
        
{
    this.ProdDetailsId = Number(this.activatedRouter.snapshot.paramMap.get('prodId') );
    this.prodDetails = this.product.getProdById(this.ProdDetailsId);
  }

  decrement(){
    if(this.inputValue>0)
    {
      this.inputValue--;
    }
   
  }
  increment(){
    if(this.inputValue<this.prodDetails!.quantity)
      {
        this.inputValue++;
      }
  }
  addToFavourite(prodId: number) {
    this.favService.addToFavourite(prodId);
  }
  addToCart(prodID:number,Quentity:number){
     this.cartService.addToCart(prodID,Quentity);
    this.router.navigate(["/YourCart"]);
  } 
}
