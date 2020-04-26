import { Component, OnInit } from '@angular/core';
import {HomeCategoryService} from "../../service/category.service";
import {Category} from "../../model/category";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-category-product-admin-create',
  templateUrl: './category-product-admin-create.component.html',
  styleUrls: ['./category-product-admin-create.component.scss']
})
export class CategoryProductAdminCreateComponent implements OnInit {

  category : Category = new Category();
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private categoryService : HomeCategoryService,
    private router : Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  get f() {
    return this.registerForm.controls;
  }

  addCategory(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      let status = confirm("Bạn muốn thêm danh mục ?");
      if (status == true) {
        this.categoryService.addCategory(this.category).subscribe(data => {
          this.router.navigateByUrl("/admin/category")
        });
      } else {
        return null;
      }
    }
  }
}
