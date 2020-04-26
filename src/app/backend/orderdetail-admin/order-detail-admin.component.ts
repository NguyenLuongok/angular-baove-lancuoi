import { Component, OnInit } from '@angular/core';
import {OrderDetail} from "../../model/orderDetail";
import {OrderDetailService} from "../../service/order-detail.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-orderDetail-admin',
  templateUrl: './order-detail-admin.component.html',
  styleUrls: ['./order-detail-admin.component.scss']
})
export class OrderDetailAdminComponent implements OnInit {

  orderDetails : OrderDetail[];

  constructor(
    private orderDetailService : OrderDetailService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getOrderDetails();
  }

  getOrderDetails(){
    this.route.params.subscribe(param =>{
      this.orderDetailService.getOrderDetail(param.orderId).subscribe(data =>{
        this.orderDetails = data;
        console.log(this.orderDetails);
      })
    })
  }
}
