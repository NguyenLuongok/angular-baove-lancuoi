import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../model/order";


@Injectable(
  {providedIn:'root'}
)
export class OrderService {

  api  = "https://restapiangular.herokuapp.com/receipt";
  constructor(private http : HttpClient) {
  }

  getOrders() : Observable<Order[]>{
    return this.http.get<Order[]>(`${this.api}/`);
  }
  getOrder(id): Observable<Order>{
    return this.http.get<Order>(`${this.api}/${id}`);
  }
  addOrder(order){
    return this.http.post<Order>(`${this.api}/`, order);
  }
  updateOrder(Order){
    return this.http.put<Order>(`${this.api}/${Order.id}`, Order);
  }
}
