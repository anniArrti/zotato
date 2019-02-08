import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import * as $ from 'jquery';
import { DataService } from '../data.service';
import { Form } from '../form';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
form = new Form;
datas;
alldatas=[];
retrievedData;
  constructor(private dataService: DataService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	 this.retrievedData = sessionStorage.getItem("quentinTarantino");
   this.alldatas = JSON.parse(this.retrievedData);
  	console.log(this.alldatas);
  }

}
