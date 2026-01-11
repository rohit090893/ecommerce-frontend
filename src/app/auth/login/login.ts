import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Auth} from '../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email='';
  password='';
  error='';

  constructor(private auth: Auth,private router:Router){

  }

  login(){
    this.auth.login({email:this.email,password:this.password})
    .subscribe({
      next:(res)=>{
        this.auth.saveToken(res.token);
        this.router.navigate(['/admin']);
      },
      error:()=>{
        this.error='Invalid login credentials';
      }
    })
  }


}
