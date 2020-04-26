import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {HomeProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {HomeCategoryService} from "../../service/category.service";
import {Category} from "../../model/category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-create-admin',
  templateUrl: './product-create-admin.component.html',
  styleUrls: ['./product-create-admin.component.scss']
})
export class ProductCreateAdminComponent implements OnInit {
  product: Product = new Product();
  categorys: Category[];

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private productService: HomeProductService,
    private serviceCategory: HomeCategoryService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
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

  addProduct() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.productService.addProduct(this.product).subscribe(data => {
        this.router.navigateByUrl("/admin/product")
      });
    }
  }

}
