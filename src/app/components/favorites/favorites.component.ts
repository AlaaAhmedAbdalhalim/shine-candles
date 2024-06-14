import { Component } from '@angular/core';
import { FavouriteService } from '../../Services/favourite.service';
import { Products } from '../../models/products';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  source: string = '../../../../assets/icons/favoriteIcon.svg';
  prodReciveId :number[] =[0];
  displayedProducts !:Products[] ;
  foundProducts !:Products[];
  length :number =0;
  constructor(private favService:FavouriteService,
              private prodService :ProductService)
  {

  }
  ngOnInit(): void {
    this.favService.productIds$.subscribe(ids => {
      this.prodReciveId = ids;  
      })
      this.foundProducts = this.prodService.findFavProds(this.prodReciveId);

  }
  addToFavourite(prodId: number) {
    if (this.isFavourite(prodId)) {
      this.prodService.getProdById(prodId)!.favStatus = this.source;
      this.favService.removeFavourite(prodId);
    }

    else {
      this.prodService.getProdById(prodId)!.favStatus = '../../../../assets/icons/Favourite.svg';
      this.favService.addFavourite(prodId);
    }
  }
  isFavourite(prodid: number): boolean {
    return this.favService.isFavourite(prodid);
  }
  
}
