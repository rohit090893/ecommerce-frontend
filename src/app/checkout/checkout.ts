import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart';
import { Order } from '../services/order';

declare var Razorpay:any;

@Component({
  selector: 'app-checkout',
  imports: [CommonModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout implements OnInit{
  cart:any[]=[];
  total=0;
  constructor(private cartService:CartService,private orderService:Order){

  }
  ngOnInit(): void {
    this.cart=this.cartService.getCart();
    this.total=this.cartService.getTotalAmount();
    console.log("Total amount on checkout page is ",this.total);
    console.log("The cart has these items",this.cart);
  }

  pay(){
    this.orderService.createPaymentOrder(this.total).subscribe(
      order=>{
        const options={
          key:'rzp_test_S1o81fOwAuemOQ',
          amount:order.amount,
          currency:order.currency,
          name:'My E-commerce',
          description:'Product Purchase',
          order_id:order.id,
          handler:(response:any)=>{
            this.saveOrder(response);
          }
        };
        const rzp=new Razorpay(options);
        rzp.open();
      }
    );
  }

  saveOrder(payment:any){
    this.orderService.saveOrder({
      products:this.cart,
      totalAmount:this.total,
      paymentId:payment.razorpay_payment_id
    }).subscribe(()=>{
      alert('Payment successful & order placed!');
      this.cartService.clearCart();
      location.href='/products';
    });
  }
}
