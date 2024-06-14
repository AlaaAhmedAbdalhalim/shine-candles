import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  DisplayProducts: Products[] | undefined;
  constructor(private ProductService :ProductService){ }

  ngOnInit(): void {
    this.DisplayProducts=this.ProductService.getAllProducts();
  }
}
