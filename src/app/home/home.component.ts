import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import * as $ from 'jquery';
import { DataService } from '../data.service';
import { Form } from '../form';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
form = new Form;
alldat;
  constructor(private dataService: DataService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }
alldatas;
  ngOnInit() {
  	this.getall();
  }
getall(){
	this.alldatas=[
	{"id":"4","product":"https:\/\/zotato.in\/wp-content\/uploads\/2018\/10\/daal-tadka-300x300.jpg","cost":"50", "name":"Daal-Tadka"},
	{"id":"5","product":"https:\/\/zotato.in\/wp-content\/uploads\/2018\/10\/KADAI-PANEER-1-e1516230468356-300x300.jpg","cost":"60", "name":"Kadai-Paneer"},
	{"id":"6","product":"https:\/\/zotato.in\/wp-content\/uploads\/2018\/10\/lunch-300x300.jpg","cost":"80", "name":"Lunch"},
	{"id":"7","product":"https:\/\/zotato.in\/wp-content\/uploads\/2018\/10\/shahi-paneer-recipe-300x300.jpg","cost":"100", "name":"Shahi-Paneer"},
	{"id":"8","product":"https:\/\/zotato.in\/wp-content\/uploads\/2018\/10\/daal-makhni-300x300.jpg","cost":"100", "name":"daal-makhni"},
	{"id":"9","product":"https:\/\/zotato.in\/wp-content\/uploads\/2018\/10\/Healthy-Curry-Yellow-Daal-4-300x300.jpg","cost":"100", "name":"Healthy-Curry-Yellow-Daal"},
	{"id":"3","product":"https:\/\/zotato.in\/wp-content\/uploads\/2018\/10\/chapaatiya.jpg","cost":"100", "name":"Chapaatiya"}];
	//this.form.functions = 'getall';
	/*this.dataService.getall(this.form).subscribe(data => {this.alldatas =data.data
		console.log(this.alldatas)
	})*/
}
}
