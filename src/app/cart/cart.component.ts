import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import * as $ from 'jquery';
import { DataService } from '../data.service';
import { Form } from '../form';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  form = new Form;
quantity;
price;
product;
total;
datalength;
alldatas=[];
updatedata=[];
retrievedData;
sessionobj;
  constructor(private dataService: DataService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.retrievedData = sessionStorage.getItem("quentinTarantino");
   this.alldatas = JSON.parse(this.retrievedData);
   if(this.alldatas == null){
      this.datalength = '0'; 
   }
   else{
   this.datalength = this.alldatas.length;
      for(var i = 0; i < this.datalength; i++){
        if(i == 0){
        this.total = this.alldatas[i].totalprice;
        }
        else{
          this.total = this.total*1 + 1*this.alldatas[i].totalprice;
        }
      } 
   }
    sessionStorage.setItem("quentinTarantino", JSON.stringify(this.alldatas))
  }
  minus(ind){
    var result = $('#qty'+ind);
    var qty = result.val();
    if(qty > 1 )
    { 
      qty = qty-1;
    } 
    else{ 
      qty = 1;
    } 
    result.val(qty);
    $('#qty'+ind).trigger('change'); 
    return false;
  }
  plus(ind){
    var result = $('#qty'+ind);
    var qty = result.val(); 
    if( !isNaN( qty )) 
    { 
      qty ++;
    } 
    else 
    { 
      qty = 1
    } 
    result.val(qty);
    $('#qty'+ind).trigger('change'); 
    return false;
  }
remove(index){
  this.alldatas.splice(index, 1);
  for(var i = 0; i < this.alldatas.length; i++){
    if(i == 0){
    this.total = this.alldatas[i].totalprice;
    }
    else{
      this.total = this.total*1 + 1*this.alldatas[i].totalprice;
    }
  }
  sessionStorage.setItem("quentinTarantino", JSON.stringify(this.alldatas))
}
update(){
  var inputs = $(".qty");
  var products = $(".productname");
  var prices = $(".price");
  for(var i = 0; i < inputs.length; i++){
    
    var quantity =$(inputs[i]).val();
    var product = $(products[i]).val();
    var price = $(prices[i]).val();
    var totalprice = quantity * price;
    this.sessionobj ={
      "quantity": quantity,
      "price": price,
      "product": product,
      "totalprice": totalprice
    }
    this.updatedata.push(this.sessionobj);
  }
  this.alldatas = this.updatedata;
  for(var i = 0; i < this.alldatas.length; i++){
        if(i == 0){
        this.total = this.alldatas[i].totalprice;
        }
        else{
          this.total = this.total*1 + 1*this.alldatas[i].totalprice;
        }
      } 
   sessionStorage.setItem("quentinTarantino", JSON.stringify(this.alldatas))
  this.updatedata= [];
}
checkout(){
   //sessionStorage.setItem("quentinTarantino", JSON.stringify(this.alldatas))
  sessionStorage.setItem('total', this.total);
  console.log(this.alldatas);
  console.log(this.total);
  this.router.navigate(['/checkout']);

}
}
