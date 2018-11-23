import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
quantity:any = 0;
price:any= 0.00;
  constructor() { }

  ngOnInit() {
  	this.quantity = sessionStorage.getItem('quantity');
  	if(this.quantity== null)
  	{
  		this.quantity= 0;
  	}
  	console.log(this.quantity)
  	this.price = sessionStorage.getItem('price');
  	this.price = this.price * this.quantity;
  }

}
