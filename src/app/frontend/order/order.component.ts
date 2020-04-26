import {Component, OnInit} from '@angular/core';
import {Item} from "../../model/item.entity";
import {ActivatedRoute, Router} from "@angular/router";
import {HomeProductService} from "../../service/product.service";
import {OrderService} from "../../service/order.service";
import {OrderDetailService} from "../../service/order-detail.service";
import {Order} from "../../model/order";
import {OrderDetail} from "../../model/orderDetail";
import {v4 as uuidv4} from 'uuid';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  items: Item[] = [];
  order: Order = new Order();
  orderDetail: OrderDetail[] = [];
  total: number = 0;
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: HomeProductService,
    private orderService: OrderService,
    private orderDetailService: OrderDetailService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.loadCart();
    this.registerForm = this.formBuilder.group({
      receiptName: ['', Validators.required],
      receiptEmail: ['', Validators.required],
      receiptPhone: ['', Validators.required],
      receiptAddress: ['', [Validators.required]],
    })
  }

  get f() {
    return this.registerForm.controls;
  }

  loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += (item.product.productPrice - (item.product.productPrice / 100) * item.product.productSale) * item.quantity;
    }
  }

  addOrder() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      let status = confirm("Xác nhận thanh toán đơn hàng ?")
      if (status == true) {
        let uuid = uuidv4();

        function order(codeOrders, receiptName, receiptEmail, receiptAddress, receiptPhone) {
          this.codeOrders = codeOrders;
          this.receiptName = receiptName;
          this.receiptEmail = receiptEmail;
          this.receiptAddress = receiptAddress;
          this.receiptPhone = receiptPhone;
        }

        let orderSetup = new order(uuid, this.order.receiptName, this.order.receiptEmail, this.order.receiptAddress, this.order.receiptPhone);
        this.order = orderSetup;
        this.orderService.addOrder(this.order).subscribe();

        function orderDetail(receiptItemTotal, receiptItemPrice, receiptItemSale, productId) {
          this.receiptItemTotal = receiptItemTotal;
          this.receiptItemPrice = receiptItemPrice;
          this.receiptItemSale = receiptItemSale;
          this.productId = productId;
        }

        this.total = 0;
        this.items = [];
        let cart = JSON.parse(localStorage.getItem('cart'));
        let receiptItem = null;
        for (var i = 0; i < cart.length; i++) {
          let item = JSON.parse(cart[i]);
          this.items.push({
            product: item.product,
            quantity: item.quantity
          });
          receiptItem = new orderDetail(item.quantity, item.product.productPrice, item.product.productSale, item.product.id);
          this.orderDetail[i] = receiptItem;

        }
        this.orderDetailService.addAllOrderDetail(this.orderDetail, this.order.codeOrders).subscribe();
        localStorage.removeItem('cart');
        this.router.navigateByUrl("/cart");
      }
    }
  }
}
