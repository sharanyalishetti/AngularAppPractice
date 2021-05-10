import { isLoweredSymbol } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products : product[] = [
    {
      productTitle : "Technology-1",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, natus. Neque expedita facilis eaque voluptate reiciendis, nemo, rem necessitatibus architecto blanditiis, voluptates nulla modi commodi quod quisquam voluptatem ea dolorem!",
      productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCDsGIfWFP6fxJiv_nuHzf3rPcFnzCsIQBg&usqp=CAU"
    },
    {
      productTitle : "Technology-2",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, natus. Neque expedita facilis eaque voluptate reiciendis, nemo, rem necessitatibus architecto blanditiis, voluptates nulla modi commodi quod quisquam voluptatem ea dolorem!",
      productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCDsGIfWFP6fxJiv_nuHzf3rPcFnzCsIQBg&usqp=CAU"
    },
    {
      productTitle : "Technology-3",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, natus. Neque expedita facilis eaque voluptate reiciendis, nemo, rem necessitatibus architecto blanditiis, voluptates nulla modi commodi quod quisquam voluptatem ea dolorem!",
      productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCDsGIfWFP6fxJiv_nuHzf3rPcFnzCsIQBg&usqp=CAU"
    },
    {
      productTitle : "Technology-4",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, natus. Neque expedita facilis eaque voluptate reiciendis, nemo, rem necessitatibus architecto blanditiis, voluptates nulla modi commodi quod quisquam voluptatem ea dolorem!",
      productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCDsGIfWFP6fxJiv_nuHzf3rPcFnzCsIQBg&usqp=CAU"
    },
    {
      productTitle : "Technology-5",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, natus. Neque expedita facilis eaque voluptate reiciendis, nemo, rem necessitatibus architecto blanditiis, voluptates nulla modi commodi quod quisquam voluptatem ea dolorem!",
      productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCDsGIfWFP6fxJiv_nuHzf3rPcFnzCsIQBg&usqp=CAU"
    },
    {
      productTitle : "Technology-6",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, natus. Neque expedita facilis eaque voluptate reiciendis, nemo, rem necessitatibus architecto blanditiis, voluptates nulla modi commodi quod quisquam voluptatem ea dolorem!",
      productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCDsGIfWFP6fxJiv_nuHzf3rPcFnzCsIQBg&usqp=CAU"
    }
  ];

  productSendByChild = [];

  productCount : number = 0;

  getProductDetailsFromChild(productTitle){
    this.productSendByChild.push(productTitle);
    this.productCount++;
  }


}



