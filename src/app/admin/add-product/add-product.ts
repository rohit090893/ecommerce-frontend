import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Product} from '../../services/product'
@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  name='';
  price=0;
  description='';
  image!:File;
  message='';

  constructor(private productService: Product){

  }

  onFileChange(event:any){
    this.image=event.target.files[0];
  }
  addProduct(){
    const formData=new FormData();
    formData.append('name',this.name);
    formData.append('price',this.price.toString());
    formData.append('description',this.description);
    formData.append('image',this.image);
    this.productService.addProduct(formData).subscribe(()=>{
      this.message='product added successfully';
    })

  }



}
