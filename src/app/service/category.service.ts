import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable(
  {providedIn:'root'}
)
export class HomeCategoryService {

  api  = " https://restapiangular.herokuapp.com/category/";
  constructor(private http : HttpClient) {
  }

  getCategorys() : Observable<Category[]>{
    return this.http.get<Category[]>(`${this.api}/`);
  }
  getCategory(id): Observable<Category>{
    return this.http.get<Category>(`${this.api}/${id}`);
    // return this.Categorys.find(Category-manager => Category-manager.id == id);
  }
  removeCategory(id): Observable<Category>{
    return this.http.delete<Category>(`${this.api}/${id}`);
    // return this.Categorys.filter(Category-manager => Category-manager.id !== id);
  }
  addCategory(Category){
    return this.http.post<Category>(`${this.api}/`, Category);
    // const newCategory = { id: 5, ...Category-manager};
    // this.Categorys.push(newCategory);
    // console.log(this.Categorys)
  }
  updateCategory(Category){
    return this.http.put<Category>(`${this.api}/${Category.id}`, Category);
  }
}
