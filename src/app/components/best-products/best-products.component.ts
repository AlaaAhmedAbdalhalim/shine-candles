import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products';
import { ProductService } from '../../Services/product.service';
@Component({
  selector: 'app-best-products',
  templateUrl: './best-products.component.html',
  styleUrl: './best-products.component.css'
})
export class BestProductsComponent implements OnInit {
  bestSellerProducts: Products[] | undefined;
  constructor(private ProductService: ProductService){

  }
  ngOnInit(): void {   
     this.bestSellerProducts = this.ProductService.getBestSellers();
  }
}
