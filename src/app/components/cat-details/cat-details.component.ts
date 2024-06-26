import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { FavouriteService } from '../../Services/favourite.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrl: './cat-details.component.css'
})
export class CatDetailsComponent implements OnInit{
  catDetailsId !: number;
  prodDetails: Products[] = [];
  source: string = '../../../../assets/icons/favoriteIcon.svg';
  CategoryName: string;
  constructor(private router: ActivatedRoute,
    private product: ProductService,
    private favService: FavouriteService) {
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
    if (this.isFavourite(prodId)) {
      this.product.getProdById(prodId)!.favStatus = this.source;
      this.favService.removeFavourite(prodId);
    }

    else {
      this.product.getProdById(prodId)!.favStatus = '../../../../assets/icons/Favourite.svg';
      this.favService.addFavourite(prodId);
    }
  }
  isFavourite(prodid: number): boolean {
    return this.favService.isFavourite(prodid);
  }
}
