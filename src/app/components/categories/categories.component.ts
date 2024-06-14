import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Categories } from '../../models/categories';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  catList:Categories[];
  constructor(private productsService: ProductService,
              private router:Router)
  {
    this.catList=productsService.getCat();
  }
openDetails(catId:number)
{
  this.router.navigate(['../CatDetails',catId]);
}
}
