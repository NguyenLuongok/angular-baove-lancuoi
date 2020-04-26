import {Component, OnInit} from '@angular/core';
import {HomeProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss'],
})
export class ProductAdminComponent implements OnInit {
  searchText;
  page = 1;
  pageSize = 8;
  products: Product[];
  collectionSize: number;
  productName: string;

  constructor(
    private service: HomeProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    function Product(id, productName, productPrice, productTotal,productSale, productImage, category) {
      this.id = id;
      this.productName = productName;
      this.productPrice = productPrice;
      this.productTotal = productTotal;
      this.productSale = productSale;
      this.productImage = productImage;
      this.category = category;
    }

    this.service.getProducts().subscribe(data => {
      data.forEach(value => {
        let product = new Product(value.id, value.productName, value.productPrice,value.productTotal,value.productSale, value.productImage, value.category);
        data.push(product);
      });
      data.splice(0, data.length / 2);
      this.products = data;
    });
  }

  load() {
    if (this.searchText.length >= 2) {
      this.getProducts();
      this.pageSize = this.products.length;
    }
    if (this.searchText.length == 0) {
      this.pageSize = 8;
    }
  }

  removeProduct(id) {
    let status = confirm("Bạn muốn xóa sản phẩm ?")
    if(status == true) {
      this.service.removeProduct(id).subscribe(response => {
        this.products = this.products.filter(product => product.id != response.id);
      })
    }
    else {
      return null;
    }
  }


}
