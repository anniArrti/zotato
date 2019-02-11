import { Injectable } from '@angular/core';

import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';  
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//  npm install --save rxjs@6 rxjs-compat@6  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Form } from './form';

@Injectable({
  providedIn: 'root'
})
export class DataService {
baseUrl = 'http://localhost/anil/controller.php';
form: Form[];
  constructor(private http: Http, private httpclient: HttpClient) { }
  	/*private headers = new Headers({'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    });
    private httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};*/
/*match(form : Form){     
    return this.http.post('api/Match/', JSON.stringify(form), {headers: this.headers}) 
           .map((response: Response) =>response.json())              
  	} */

  	login(form : Form){     
    return this.http.post('http://localhost/anil/controller.php',{form})
           .map((response: Response) =>response.json())              
  	}
    contact(form : Form){     
    return this.http.post('http://localhost/anil/controller.php',{form})
           .map((response: Response) =>response.json())              
    }
    getall(form : Form){
      return this.http.post('http://localhost/anil/controller.php',{form})
           .map((response: Response) =>response.json())
    }
    getbyid(form : Form){
      return this.http.post('http://localhost/anil/controller.php',{form})
           .map((response: Response) =>response.json())
    }
    forgotpassword(form : Form){     
      return this.http.post('http://localhost/anil/controller.php',{form})
             .map((response: Response) =>response.json())              
      }
  	/*singUp(form : Form){     
    return this.http.post('api/singUp/', JSON.stringify(form), {headers: this.headers}) 
           .map((response: Response) =>response.json())              
    }*/
   
}
