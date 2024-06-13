import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private prodList: Products[];
  private catList :Categories[];
  constructor()
  { 
    this.prodList=[{ id:1, name:'Latte Candle',img:'../../../../../assets/Images/c.jpg',Description:' A Latte Candle is a decorative wax candle crafted to resemble a cup of latte, complete with a coffee-colored body. Infused with aromatic scents reminiscent of freshly brewed coffee, it adds both visual charm and delightful fragrance to any space.',
                    price:400,offer:'',quantity:5,categoryId: 1, favStatus:'../../../../assets/icons/favoriteIcon.svg',soldCount:0},
                  
                    { id:2, name:'cinnamon Candle',img:'../../../../../assets/Images/cinnamon Candles.jpg',Description:'A Cinnamon Candle is a scented candle infused with the warm, spicy fragrance of cinnamon, evoking cozy memories of holiday baking and seasonal festivities. '
                   ,price:500,offer:'70% off',quantity:4,categoryId: 2, favStatus:'../../../../assets/icons/favoriteIcon.svg',soldCount:0},
                   
                   { id:3, name:'Coffee Candle',img:'../../../../../assets/Images/Coffee candle.jpg',Description:'A Coffee Candle is a scented candle infused with the warm, spicy fragrance of Coffee, evoking cozy memories of holiday baking and seasonal festivities. '
                   ,price:700,offer:'70% off',quantity:1,categoryId: 2, favStatus:'../../../../assets/icons/favoriteIcon.svg',soldCount:0},

                   { id:4, name:'lemon candle',img:'../../../../../assets/Images/lemon candle.jpg',Description:'A lemon candle is a scented candle infused with the warm, spicy fragrance of Lemon , evoking cozy memories of holiday baking and seasonal festivities. '
                   ,price:450,offer:'20% off',quantity:1,categoryId: 2, favStatus:'../../../../assets/icons/favoriteIcon.svg',soldCount:0},

                   { id:5, name:'bubbles Candle',img:'../../../../../assets/Images/bubbleCandle.jpg',Description:'A Bubbles Candle is a whimsical candle designed to mimic the effervescent beauty of bubbles, typically featuring a translucent wax body with shimmering accents that catch the light.'
                   ,price:200,offer:'20% off',quantity:3,categoryId: 3, favStatus:'../../../../assets/icons/favoriteIcon.svg',soldCount:0},
                   
                   { id:6, name:'Wick Timmer',img:'../../../../../assets/Images/wickTimmer.jpg',Description:' A wick timer for a candle is a device designed to regulate the burning time of a candles wick.'
                   ,price:250,offer:'Buy one Get One',quantity:2,categoryId: 4, favStatus:'../../../../assets/icons/favoriteIcon.svg',soldCount:0},
                   
                   { id:7, name:'Wick Dipper',img:'../../../../../assets/Images/wickDipper.jpg',Description:'A wick dipper for candles is a specialized tool used to extinguish candles'
                   ,price:300,offer:'',quantity:1,categoryId: 5, favStatus:'../../../../assets/icons/favoriteIcon.svg',soldCount:0},
                   
                   { id:8, name:'Candle Snuffer',img:'../../../../../assets/Images/candleSnuffer.jpg',Description:'A candle snuffer is a tool designed to safely extinguish candles to minimize wax splatter.'
                   ,price:350,offer:'',quantity:0,categoryId: 6, favStatus:'../../../../assets/icons/favoriteIcon.svg',soldCount:0},
                   
                   { id:9, name:'Candle Lighter',img:'../../../../../assets/Images/candleLighter.jpg',Description:'A candle lighter is a long-handled device specifically designed for lighting candles safely and conveniently'
                   ,price:400,offer:'',quantity:3,categoryId: 7, favStatus:'../../../../assets/icons/favoriteIcon.svg',soldCount:0},
                   
                   { id:10, name:'Lavander Candle',img:'../../../../../assets/Images/Lavander Candle.jpg',Description:' Lavender Candle is a scented candle infused with the soothing and aromatic fragrance of lavender essential oil and Its calming scent'
                   ,price:400,offer:'Buy one Get One',quantity:5,categoryId:2,favStatus:'../../../../assets/icons/favoriteIcon.svg',soldCount:0}
                  ]


    this.catList=[{catid:4,name:'Wick Timmer',catImg:'../../../../../assets/Images/Wick Timmer cat.jpg'},
                  {catid:5,name:'Wick Dipper',catImg:'../../../../../assets/Images/Wick Dipper.jpg'},
                  {catid:6,name:'Candle Snuffer',catImg:'../../../../../assets/Images/Candle Snuffer.jpg'},
                  {catid:2,name:'Scented Candle ',catImg:'../../../../../assets/Images/cinnamon Candles.jpg'},
                  {catid:1,name:'Gel Candle',catImg:'../../../../../assets/Images/Gel candles.jpg'},
                  {catid:3,name:'Handmade Candle ',catImg:'../../../../../assets/Images/Handmade Candles.jpg'},
                  {catid:7,name:'Candle Lighter',catImg:'../../../../../assets/Images/candleLighter.jpg'},
                  ]}

  getAllProducts(): Products[] {
    return this.prodList;
  }
  getSomeProducts(): Products[] {
    return this.getAllProducts().slice(0, 4);
  }
  getCat():Categories[]{
    return this.catList;
  }
  getCatName(catId:number) :any {
    const catName = this.catList.find(cat => cat.catid ==catId );
    return catName;
  }
}
