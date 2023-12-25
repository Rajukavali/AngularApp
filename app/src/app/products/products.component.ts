import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productlist: any;

  constructor(private api:ProductsService,private cart:CartService,private toast:NgToastService){}
  ngOnInit(): void {
  this.api.getProducts().subscribe(res=>{
    this.productlist=res;
this.productlist.forEach((a:any)=> {
Object.assign(a, {quantity:1, total:a.price})
  
});
  })
  }
  addtocart(item:any) {
    this.toast.success({detail:'Added to cart',summary:'items has been added',duration:1000})
    this.cart.addtoCart(item);
    console.log(item);
    }

}
