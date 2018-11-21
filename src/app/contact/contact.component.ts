import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import * as $ from 'jquery';
import { DataService } from '../data.service';
import { Form } from '../form';
declare var google;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


form = new Form;
datas;
alldatas;
  constructor(private dataService: DataService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.getall();
  	$(document).ready( function() {
  	//$("#btn").click(function(){
          //var address = document.getElementById("txtAddress").value;
          //alert(address);
            var geocoder =  new google.maps.Geocoder();
            geocoder.geocode( { 'address': 'punjab, in'}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            alert("Latitude: " + latitude + "\nLongitude: " + longitude);
           // alert("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()); 
          } else {
            alert("Something got wrong " + status);
          }
        });
});
  }
  contact(form){
	form.functions = "contact";
	this.dataService.contact(form).subscribe(data => this.datas =data)
}
getall(){
	this.form={
		functions: "getall"
	}
	this.dataService.getall(this.form).subscribe(data => {this.alldatas =data.data
		console.log(this.alldatas)
	})
}
}
