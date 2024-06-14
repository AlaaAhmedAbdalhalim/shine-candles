import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  private productIds: number[] = [];
  private productIdSource = new BehaviorSubject<number[]>([0]);
  source: string = '../../../../assets/icons/favoriteIcon.svg';

  constructor( private productService :ProductService ) { }
  get productIds$() {
    return this.productIdSource.asObservable();
  }
  addFavourite(prodId:number){
    this.productIds.push(prodId);
    this.productIdSource.next([...this.productIds]);
  }
  removeFavourite(prodId :number)
  {
    const currentFavourites = this.productIdSource.value;
    this.productIdSource.next(currentFavourites.filter((id) => id !== prodId));
  }
  isFavourite(productId: number): boolean {
    return this.productIdSource.value.includes(productId);
  }
 /*  addToFavourite(prodId: number) {
    if (this.isFavourite(prodId)) {
      this.productService.getProdById(prodId)!.favStatus = this.source;
      this.removeFavourite(prodId);
    }

    else {
      this.productService.getProdById(prodId)!.favStatus = '../../../../assets/icons/Favourite.svg';
      this.addFavourite(prodId);
    }
  } */
 
}
