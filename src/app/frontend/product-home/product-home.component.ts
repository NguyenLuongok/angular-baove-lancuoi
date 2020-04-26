import {Component, OnInit} from '@angular/core';
import {HomeCategoryService} from "../../service/category.service";
import {ActivatedRoute} from "@angular/router";
import {ProductCategoryService} from "./product-category.service";
import {Category} from "../../model/category";
import {Product} from "./product";
import {HomeProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {
  searchText;
  page = 1;
  category: String;
  pageSize= 12;
  products: Product[];
  categorys: Category[];
  collectionSize: number;

  constructor(
    private route: ActivatedRoute,
    private productService : HomeProductService,
    private productCategory: ProductCategoryService,
    private serviceCategory: HomeCategoryService
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategorys();
    this.getProductByCategory();
  }


  getCategorys() {
    this.serviceCategory.getCategorys().subscribe(data => {
      this.categorys = data;
      this.collectionSize = data.length;
    })
  }

  getProductByCategory() {
    function Product(id, productName, productPrice, productSale, productImage, category) {
      this.id = id;
      this.productName = productName;
      this.productPrice = productPrice;
      this.productSale = productSale;
      this.productImage = productImage;
      this.category = category;
    }

    this.route.params.subscribe(param => {
      if (param.categoryID != null) {
        this.productCategory.getProductByCategory(param.categoryID).subscribe(data => {
          this.products = data;
          this.pageSize = data.length;
          this.products.forEach((value, index: 1) => {
            this.category = value.category;
          })
        })
      }
    })
  }

  getProducts() {
    this.route.params.subscribe(param => {
      if (param.categoryID == null) {
        function Product(id, productName, productPrice, productSale, productImage, category) {
          this.id = id;
          this.productName = productName;
          this.productPrice = productPrice;
          this.productSale = productSale;
          this.productImage = productImage;
          this.category = category;
        }

        this.productService.getProducts().subscribe(data => {
          data.forEach(value => {
            let product = new Product(value.id, value.productName, value.productPrice, value.productSale, value.productImage, value.category);
            data.push(product);
          });
          data.splice(0, data.length / 2);
          this.products = data;
        });
      }
    });
  }

  load() {
    if (this.searchText.length >= 2) {
      this.getProducts();
      this.pageSize = this.products.length;
    }
    if (this.searchText.length == 0) {
      this.pageSize = 12;
    }
  }
}
