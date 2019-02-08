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
    //this.getall();
    $(document).ready( function() {
    $("#btn").click(function(){
          var address = $("#txtAddress").val();
          alert(address);
            var geocoder =  new google.maps.Geocoder();
            geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            alert("Latitude: " + latitude + "\nLongitude: " + longitude);
           // alert("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()); 
          } else {
            alert("Something got wrong " + status);
          }
        });
  /*          var lat1 = '30.9044857';
  var lang1 = '77.09673569999995';
  var lat2 = '30.8994362';
  var lang2= '77.01902280000002';
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(lat1 - lat2);
  var dLong = rad(lang1 - lang2);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(lang2)) * Math.cos(rad(lat2)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
    console.log(a);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  console.log(c);
  var d = R * c;
 console.log(d);*/
});

    var rad = function(x) {
  return x * Math.PI / 180;
};

//var getDistance = function(p1, p2) {
  
  //return d; // returns the distance in meter
//};
  });
  }
  contact(form){
  form.functions = "contact";
  this.dataService.contact(form).subscribe(data => this.datas =data)
}
}
