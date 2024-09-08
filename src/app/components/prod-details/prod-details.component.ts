import { Component } from '@angular/core';
import { Products } from '../../models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { FavouriteService } from '../../Services/favourite.service';


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
               private favService :FavouriteService )       
        
{
    this.ProdDetailsId = Number(this.activatedRouter.snapshot.paramMap.get('prodId') );
    this.prodDetails = this.product.getProdById(this.ProdDetailsId);
  }
/* 
  Buy(selectedcount:any,ProdDetailsId:any){
    this.CartService.addToCart(ProdDetailsId,selectedcount);
   this.router.navigate(["/YourCart"]);
  } */
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
}
