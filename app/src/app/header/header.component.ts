import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalitem: any;
  constructor(private cart:CartService){}
  ngOnInit(): void {
    this.cart.getProduct().subscribe(res=>{
      this.totalitem=res.length;
    })
  }

}
