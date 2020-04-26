import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";

@Injectable(
  {providedIn:'root'}
)
export class ProductCategoryService {

  api  = "https://restapiangular.herokuapp.com/product/category";
  constructor(private http : HttpClient) {
  }

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(`${'https://restapiangular.herokuapp.com/product'}/`);
  }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
    // return this.products.find(product-manager => product-manager.id == id);
  }
  getProductByCategory(id): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/${id}`);
    // return this.products.find(product-manager => product-manager.id == id);
  }
  removeProduct(id): Observable<Product>{
    return this.http.delete<Product>(`${this.api}/${id}`);
    // return this.products.filter(product-manager => product-manager.id !== id);
  }
  addProduct(product){
    return this.http.post<Product>(`${this.api}/`, product);
    // const newProduct = { id: 5, ...product-manager};
    // this.products.push(newProduct);
    // console.log(this.products)
  }
  updateProduct(product){
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
}
