import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey='cart';
  getCart(): any [] {
    return JSON.parse(localStorage.getItem(this.cartKey)||'[]');
  }

  addToCart(product:any){
    const cart=this.getCart();
    cart.push(product);
    localStorage.setItem(this.cartKey,JSON.stringify(cart));
    console.log("My cart is ",cart);
  }

  removeFromCart(index:number){
    const cart=this.getCart();
    cart.splice(index,1);
    localStorage.setItem(this.cartKey,JSON.stringify(cart));
  }

  clearCart(){
    localStorage.removeItem(this.cartKey);
  }

  getTotalAmount():number{
    return this.getCart().reduce((sum,item)=> sum+Number(item.price),0);
  }


}
