import { Component, OnInit } from '@angular/core';
import { Order } from '../services/order';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-orders',
  imports: [CommonModule],
  templateUrl: './admin-orders.html',
  styleUrl: './admin-orders.css',
})
export class AdminOrders implements OnInit {
  orders:any[]=[];
  constructor(private orderService:Order){

  }
  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(res=>this.orders=res);
  }
}
