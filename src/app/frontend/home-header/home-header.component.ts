import { Component, OnInit } from '@angular/core';
import {Item} from "../../model/item.entity";

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(
  ) { }

  ngOnInit(): void {
    this.loadCartHeader();
  }

  loadCartHeader(): void {
      this.total = 0;
      this.items = [];
      let cartHeader = JSON.parse(localStorage.getItem('cart'));
      for (var i = 0; i < cartHeader.length; i++) {
        let item = JSON.parse(cartHeader[i]);
        this.items.push({
          product: item.product,
          quantity: item.quantity
        });
        this.total += (item.product.productPrice-(item.product.productPrice/100)*item.product.productSale) * item.quantity;
      }
  }
}
