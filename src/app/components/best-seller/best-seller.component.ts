import { Component, Input } from '@angular/core';
import { Products } from '../../models/products';
import { ProductService } from '../../Services/product.service';
import { FavouriteService } from '../../Services/favourite.service';
import { Router } from '@angular/router';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent {
  @Input() Bestproduct: Products | undefined;
  displayproducts: Products[] | undefined;
  constructor(private productService: ProductService,
    private favService: FavouriteService,
    private router :Router,
  private userAuth :UserAuthService)
{

}
ngOnInit(): void {
this.displayproducts = this.productService.getBestSellers();
   
}
addToFavourite(prodId: number) {
    if(this.userAuth .isUserLogged)
    {
      this.favService.addToFavourite(prodId);
  }
  else {
    const userConfirmed = alert ("please Login First");
    if (userConfirmed == undefined) { 
      this.router.navigate(['Login']);
    }
  }
  
}
isFavourite(prodid: number): boolean {
return this.favService.isFavourite(prodid);
}
openDetails(prodId :number){
this.router.navigate(['ProductDetails',prodId]);
}
}
