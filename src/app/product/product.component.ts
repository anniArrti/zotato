import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import * as $ from 'jquery';
import { DataService } from '../data.service';
import { Form } from '../form';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
form = new Form;
id;
onedata;
product;
price;
quantity;
alldatas;
totalprice;
data;
retrievedData;
sessionobj={};

  constructor(private dataService: DataService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { 	
		this.activatedRoute.params.subscribe( params => {
			this.id=params.id;
		});
  }
  ngOnInit() {
    this.retrievedData = sessionStorage.getItem("quentinTarantino");
   this.data = JSON.parse(this.retrievedData);
    this.getall();
  	this.getbyid();
  	var _this = this;
  	/*$(document).ready( function() {
  	$("#ordernow").click(function(){
          
         
          alert(quantity);
      });
  });*/
  }
  getbyid(){
  	this.form.id= this.id;
  	this.form.functions= "getbyid";
  	//console.log(this.form);
  	this.dataService.getbyid(this.form).subscribe(data => {this.onedata =data.data
  		//console.log(this.alldatas)
  	})
  }
  order(){
		this.product = $("#product_name").val();
    this.price = $("#product_cost").val();
    this.quantity = $("#qty1").val();
    this.totalprice = this.price * this.quantity;
    this.sessionobj ={
      "quantity": this.quantity,
      "price": this.price,
      "product": this.product,
      "totalprice": this.totalprice
    }
    if(this.data == 'null'){
      this.data = [this.sessionobj];
    }
    else{
      this.data.push(this.sessionobj);
    }
sessionStorage.setItem("quentinTarantino", JSON.stringify(this.data))
    //this.data.push(this.sessionobj);
   //sessionStorage.setItem('sessionobj', this.alldatas);
    //sessionStorage.setItem('quantity', this.quantity);
    //sessionStorage.setItem('price', this.price);
    //sessionStorage.setItem('product', this.product);
    this.router.navigate(['/cart']);
  }
  getall(){
  this.alldatas=[
  {"id":"4","product":"https:\/\/zotato.in\/wp-content\/uploads\/2018\/10\/daal-tadka-300x300.jpg","cost":"50", "name":"Daal-Tadka"},
  {"id":"5","product":"https:\/\/zotato.in\/wp-content\/uploads\/2018\/10\/KADAI-PANEER-1-e1516230468356-300x300.jpg","cost":"60", "name":"Kadai-Paneer"},
  {"id":"6","product":"https:\/\/zotato.in\/wp-content\/uploads\/2018\/10\/lunch-300x300.jpg","cost":"80", "name":"Lunch"},
  {"id":"7","product":"https:\/\/zotato.in\/wp-content\/uploads\/2018\/10\/shahi-paneer-recipe-300x300.jpg","cost":"100", "name":"Shahi-Paneer"},
  {"id":"8","product":"https:\/\/zotato.in\/wp-content\/uploads\/2018\/10\/daal-makhni-300x300.jpg","cost":"100", "name":"daal-makhni"},
  {"id":"9","product":"https:\/\/zotato.in\/wp-content\/uploads\/2018\/10\/Healthy-Curry-Yellow-Daal-4-300x300.jpg","cost":"100", "name":"Yellow-Daal"},
  {"id":"3","product":"https:\/\/zotato.in\/wp-content\/uploads\/2018\/10\/chapaatiya.jpg","cost":"100", "name":"Chapaatiya"}];
  //this.form.functions = 'getall';
  /*this.dataService.getall(this.form).subscribe(data => {this.alldatas =data.data
    console.log(this.alldatas)
  })*/
}
}
