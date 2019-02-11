import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { DataService } from '../data.service';
import { Form } from '../form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form = new Form;
datas;
  constructor(private dataService: DataService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

login(form){
   form.functions = "login";
	 this.dataService.login(form).subscribe(data => {
	 	if(data.data == "Matching"){
	 		alert("");
      //this.auth.sendToken(this.form.email);
    }
    else{
        this.datas = data.data;
      }
	 })
}
forgotpassword(form){
  console.log(form);
  form.functions = "forgotpassword";
	 this.dataService.forgotpassword(form).subscribe(data => {
	 	if(data.data == "Matching"){
	 		alert("");
      //this.auth.sendToken(this.form.email);
    }
    else{
        this.datas = data.data;
      }
	 })
}
}
