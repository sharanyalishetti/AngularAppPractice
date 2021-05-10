import { Component, Input, EventEmitter,Output } from '@angular/core';
import { emit } from 'process';
//import { EventEmitter } from 'stream';
import { product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  //receive data from parent as input
  @Input() productObj : product;


  //Creates a custom event
  @Output() myEvent  = new EventEmitter();
  
  
  sendProductDetailsToParent(productTitle) {
    //emit data
    this.myEvent.emit(productTitle);

  }
}
