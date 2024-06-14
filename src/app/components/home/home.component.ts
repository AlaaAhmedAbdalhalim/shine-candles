import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/products';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  featuredProducts: Products[] | undefined;
  constructor(private ProductService :ProductService){ }

  ngOnInit(): void {
    this.featuredProducts=this.ProductService.getSomeProducts();
  }
 
}
