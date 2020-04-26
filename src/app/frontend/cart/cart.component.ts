import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HomeProductService} from "../../service/product.service";
import {Item} from "../../model/item.entity";
import {Product} from "../../model/product";
import {HomeHeaderComponent} from "../home-header/home-header.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  product: Product;
  items: Item[] = [];
  total: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: HomeProductService
  ) {
  }

  ngOnInit(): void {
    this.addToCart();
  }

  addToCart(){
    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      if (id) {
        this.productService.getProduct(id).subscribe(data => {
          this.product = data;
          var item: Item = {
            product: this.product,
            quantity: 1
          };
          if (localStorage.getItem('cart') == null) {
            let cart: any = [];
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
          } else {
            let cart: any = JSON.parse(localStorage.getItem('cart'));
            let index: number = -1;
            for (var i = 0; i < cart.length; i++) {
              let item: Item = JSON.parse(cart[i]);
              if (item.product.id == id) {
                index = i;
                break;
              }
            }
            if (index == -1) {
              cart.push(JSON.stringify(item));
              localStorage.setItem('cart', JSON.stringify(cart));
            } else {
              let item: Item = JSON.parse(cart[index]);
              item.quantity += 1;
              cart[index] = JSON.stringify(item);
              localStorage.setItem("cart", JSON.stringify(cart));
            }
          }
          this.loadCart();
           this.router.navigateByUrl("/cart");
        })
      } else {
        this.loadCart();
      }
    });
  }

  update(id: number): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    let quantityUpdate = null;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      quantityUpdate = document.getElementById(String(id))["value"];
      if (item.product.id == id) {
        index = i;
        break;
      }
    }
    let item: Item = JSON.parse(cart[index]);
    item.quantity = Number(quantityUpdate);
    cart[index] = JSON.stringify(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
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
      this.total += (item.product.productPrice-(item.product.productPrice/100)*item.product.productSale) * item.quantity;
    }
  }

  remove(id: number): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.product.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
  }

}
