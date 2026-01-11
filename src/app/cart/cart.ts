import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cart:any[]=[];
  total=0;
  constructor(private cartService: CartService){

  }

  ngOnInit(){
    this.loadCart();
  }

  loadCart(){
    this.cart=this.cartService.getCart();
    this.total=this.cartService.getTotalAmount();

  }

  remove(index:number){
    this.cartService.removeFromCart(index);
    this.loadCart();
  }
}
