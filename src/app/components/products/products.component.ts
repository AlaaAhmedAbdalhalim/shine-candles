import { Component, Input } from '@angular/core';
import { Products } from '../../models/products';
import { ProductService } from '../../Services/product.service';
import { Router } from '@angular/router';
import { FavouriteService } from '../../Services/favourite.service';
import { UserAuthService } from '../../Services/user-auth.service';

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
    private router: Router,
    private userAuth: UserAuthService) {

  }
  ngOnInit(): void {
    this.displayproducts = this.productService.getAllProducts();
  }
  addToFavourite(prodId: number) {
    if (this.userAuth.isUserLogged)
      this.favService.addToFavourite(prodId);

    else {
      const userConfirmed = alert("please Login First");
      if (userConfirmed == undefined) {
        this.router.navigate(['Login']);
      }
    }

  }
  isFavourite(prodid: number): boolean {
    return this.favService.isFavourite(prodid);
  }
  openDetails(prodId: number) {
    this.router.navigate(['ProductDetails', prodId]);
  }
}
