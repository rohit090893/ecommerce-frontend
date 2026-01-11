import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/product';
import { CartService } from '../../services/cart';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit{
  products:any[]=[];
  constructor(private productService:Product,private cartService:CartService, private router:Router){

  }

  ngOnInit(){
    this.productService.getProducts().subscribe(res=>this.products=res);

  }
  addToCart(product:any){
    this.cartService.addToCart(product);
    alert('Added to cart');
    this.router.navigate(['/cart']);
  }
}
