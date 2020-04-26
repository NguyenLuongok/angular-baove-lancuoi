import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {HomeProductService} from "../../service/product.service";

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  page= 1;
  pageSize = 8;
  products : Product[];

  constructor(private service : HomeProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.service.getProducts().subscribe(data =>{
      this.products = data;
    });
  }

}
