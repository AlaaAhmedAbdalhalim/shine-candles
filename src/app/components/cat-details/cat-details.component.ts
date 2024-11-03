import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { FavouriteService } from '../../Services/favourite.service';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrl: './cat-details.component.css'
})
export class CatDetailsComponent implements OnInit{
  inputValue :number = 0;
  catDetailsId !: number;
  prodDetails: Products[]|undefined = undefined;
  source: string = '../../../../assets/icons/favoriteIcon.svg';
  CategoryName: string;
  isAlertVisible=false;
  constructor(private router: ActivatedRoute,
    private product: ProductService,
    private Router: Router,
    private favService: FavouriteService,
  private userAuth :UserAuthService) {
    this.CategoryName = this.product.getCatName(this.catDetailsId);
  }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.catDetailsId = +params['catId'];
    })
    this.filterProductsByCategoryId(this.catDetailsId);
  }

  filterProductsByCategoryId(catDetailsId: number): void {
    const filteredProducts = this.product.getProdsByCatId(catDetailsId);
    this.prodDetails = filteredProducts;

  }

  addToFavourite(prodId: number) {
    if (this.userAuth.isUserLogged)
      this.favService.addToFavourite(prodId);

    else {
      this.isAlertVisible=true;
    }

  }
  isFavourite(prodid: number): boolean {
    return this.favService.isFavourite(prodid);
  }
  openDetails(prodId :number){
    this.Router.navigate(['ProductDetails',prodId]);
  }
}
