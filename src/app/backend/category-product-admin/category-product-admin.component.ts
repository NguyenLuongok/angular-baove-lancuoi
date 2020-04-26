import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/category";
import {HomeCategoryService} from "../../service/category.service";

@Component({
  selector: 'app-category-product-admin',
  templateUrl: './category-product-admin.component.html',
  styleUrls: ['./category-product-admin.component.scss']
})
export class CategoryProductAdminComponent implements OnInit {

  searchText;
  page = 1;
  pageSize = 4;
  categorys : Category[];
  constructor(private serviceCategory : HomeCategoryService) { }

  ngOnInit(): void {
    this.getCategorys();
  }

  getCategorys() {
    this.serviceCategory.getCategorys().subscribe(data => {
      this.categorys = data;
    })
  }
  removeCategory(id) {
    let status = confirm("Bạn muốn xóa danh mục ? Điều này sẽ xóa tất cả dữ liệu sản phẩm trong danh mục đó !")
    if(status == true){
      this.serviceCategory.removeCategory(id).subscribe(response => {
        this.categorys = this.categorys.filter(category => category.id != response.id);
      })
    }
    else {
      return null;
    }
  }

}
