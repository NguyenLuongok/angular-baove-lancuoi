import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {HomeProductService} from "../../service/product.service";
import {Category} from "../../model/category";
import {HomeCategoryService} from "../../service/category.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-update-admin',
  templateUrl: './product-update-admin.component.html',
  styleUrls: ['./product-update-admin.component.scss']
})
export class ProductUpdateAdminComponent implements OnInit {

  categorys:Category[];
  product: Product;
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private productService: HomeProductService,
    private serviceCategory : HomeCategoryService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getProduct();
    this.getCategorys();
    this.registerForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productPrice: ['', Validators.required],
      productTotal: ['', Validators.required],
      productSale: ['', [Validators.required]],
      productImage: ['', [Validators.required]],
      category: ['', [Validators.required]],
      productDescription: ['', Validators.required],
    })
  }

  get f() {
    return this.registerForm.controls;
  }

  getCategorys() {
    this.serviceCategory.getCategorys().subscribe(data => {
      this.categorys = data;
    })
  }

  getProduct(){
    this.route.params.subscribe(param => {
      this.productService.getProduct(param.productID).subscribe(data => {
        this.product = data;
        console.log(data)
      });
    })
  }
  updateProduct() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      let status = confirm("Xác nhận cập nhật ?")
      if (status == true) {
        this.productService.updateProduct(this.product).subscribe(data => {
          this.router.navigateByUrl("/admin/product");
        });
      } else {
        return null;
      }
    }
  }
}
