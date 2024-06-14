import { Component, Input } from '@angular/core';
import { Products } from '../../models/products';
import { ProductService } from '../../Services/product.service';
import { Router } from '@angular/router';
import { FavouriteService } from '../../Services/favourite.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  source: string = '../../../../assets/icons/favoriteIcon.svg';
  @Input() product: Products | undefined;
  displayproducts: Products[] | undefined;
  constructor(private productService: ProductService,
              private favService: FavouriteService,
              private router :Router)
  {

  }
  ngOnInit(): void {
    this.displayproducts = this.productService.getAllProducts();
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
