import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any;
  grandtotal:number=0;
  constructor(private cart:CartService,private toast:NgToastService){}
  ngOnInit(): void {
    this.cart.getProduct().subscribe(res=>{
      this.products=res;
      this.grandtotal=this.cart.gettotalprice();
    })
  }
emptycart(){
  this.toast.warning({detail:'deleted all items from cart',summary:'all items have been added',duration:1000})
  this.cart.removeallcart();
}
delete (item:any){
  this.toast.warning({detail:'deleted from cart',summary:'items has been deleted',duration:1000})
  this.cart.removecartitem(item);
}
}
