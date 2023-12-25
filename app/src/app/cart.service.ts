import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
public productlist=new BehaviorSubject<any>([])
public cartitemlist:any=[]
  product: any;
  constructor() { }

  getProduct(){
    return this.productlist.asObservable();
  }
  addtoCart(product:any){
    this.cartitemlist.push(product);
    this.productlist.next(this.cartitemlist);
    this.gettotalprice();
  }
  gettotalprice():number{
    let grandtotal=0;
    this.cartitemlist.map((a:any)=>{
      grandtotal+=a.total;

    })
    return grandtotal;
  }
  removeallcart(){
    this.cartitemlist=[];
    this.productlist.next(this.cartitemlist);

  }
  removecartitem(product:any){
    this.cartitemlist.map((a:any,index:any)=>{
if(product.id===a.id)
this.cartitemlist.splice(index,1)

    })
    this.productlist.next(this.cartitemlist);
  }
}
