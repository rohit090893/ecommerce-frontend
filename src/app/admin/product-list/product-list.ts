import { Component,OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Product } from '../../services/product';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit{
  products:any[]=[];
  constructor(private productService:Product){

  }

  ngOnInit(){
    this.productService.getProducts().
    subscribe(res=>this.products=res);

  }
  delete(id:string){
    this.productService.deleteProduct(id).subscribe(
      ()=>{
        this.products=this.products.filter(p=>p._id!==id);
      }
    )
    }

}
