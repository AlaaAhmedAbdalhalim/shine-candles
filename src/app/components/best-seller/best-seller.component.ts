import { Component, Input } from '@angular/core';
import { Products } from '../../models/products';
import { ProductService } from '../../Services/product.service';
import { FavouriteService } from '../../Services/favourite.service';
import { Router } from '@angular/router';

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
    private router :Router)
{

}
ngOnInit(): void {
this.displayproducts = this.productService.getBestSellers();
   
}
addToFavourite(prodId: number) {
this.favService.addToFavourite(prodId);
}
isFavourite(prodid: number): boolean {
return this.favService.isFavourite(prodid);
}
openDetails(prodId :number){
this.router.navigate(['ProductDetails',prodId]);
}
}
