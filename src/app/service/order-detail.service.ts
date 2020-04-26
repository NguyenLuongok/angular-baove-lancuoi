import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderDetail} from "../model/orderDetail";

@Injectable(
  {providedIn:'root'}
)
export class OrderDetailService {
  api  = " https://restapiangular.herokuapp.com/receiptItem";
  constructor(private http : HttpClient) {
  }

  getOrderDetail(id): Observable<OrderDetail[]>{
    return this.http.get<OrderDetail[]>(`${this.api}/${id}`);
  }
  addAllOrderDetail(OrderDetail,name){
    return this.http.post<OrderDetail>(`${this.api}/${name}`, OrderDetail);
  }
  // updateOrder(OrderDetail){
  //   return this.http.put<OrderDetail>(`${this.api}/${OrderDetail.id}`, OrderDetail);
  // }
}
