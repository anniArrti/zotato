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
alldatas;
  constructor(private dataService: DataService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { 
  		
  		this.activatedRoute.params.subscribe( params => {
  			this.id=params.id;
  		});
  }
  ngOnInit() {
  	this.getbyid();
  }
  getbyid(){
	this.form.id= this.id;
	this.form.functions= "getbyid";
	console.log(this.form);
	this.dataService.getbyid(this.form).subscribe(data => {this.alldatas =data.data
		console.log(this.alldatas)
	})
  }
}
