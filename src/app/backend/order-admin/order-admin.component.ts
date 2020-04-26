import { Component, OnInit } from '@angular/core';
import {Order} from "../../model/order";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.scss']
})
export class OrderAdminComponent implements OnInit {

  page = 1;
  pageSize = 8;
  searchText;

  collectionSize: number;
  productName: string;
  orders : Order[];

  constructor(
  private  orderService : OrderService
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }


  getOrders(){
    this.orderService.getOrders().subscribe(data =>{
      this.orders = data;
      console.log(this.orders);
    });
  }
}
