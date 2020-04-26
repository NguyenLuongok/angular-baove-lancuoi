import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute} from "@angular/router";
import {HomeProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  newProduct : Product[];
  page= 1;
  pageSize = 4;

  constructor(
    private route: ActivatedRoute,
    private productService: HomeProductService,
  ) { }

  ngOnInit() {
    this.getProduct();
    this.getProductFooterWear();
  }

  getProduct(){
    this.route.params.subscribe(param => {
      this.productService.getProduct(param.productID).subscribe(data => {
        this.product = data
      })

    })
  }
  getProductFooterWear(){
    this.productService.getProducts().subscribe(data1 =>{
      this.newProduct = data1;
    });
  }
}
