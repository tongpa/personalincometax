import { Injectable } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge'; 
import 'rxjs/add/observable/of'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/startWith'; 
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import {Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';


import { Item, PITApi }            from '../../models/pit.model';
@Injectable()
export class PITService {
  incomeDefaultURL = "http://192.168.1.73:3000/api/itemincomedefault/";
  allowanceDefaultURL = "http://192.168.1.73:3000/api/itemallowancedefault/";

  itemsURL = "http://192.168.1.73:3000/api/itemincome/";
  allowanceURL = "http://192.168.1.73:3000/api/itemallowance/";
  constructor(private http: Http) { }

  getItemsIncomeDefault(): Promise<PITApi> {
    let params: URLSearchParams = new URLSearchParams();        
    return this.http
    .get(this.incomeDefaultURL  )
    .toPromise()
    .then(res => {
        //console.log(res);
        let pitApi = res.json() as PITApi;  
        console.log(pitApi);
        return pitApi;})
    .catch(this.handleError);
  }

  getItemsAllowanceDefault(): Promise<PITApi> {
    let params: URLSearchParams = new URLSearchParams();        
    return this.http
    .get(this.allowanceDefaultURL  )
    .toPromise()
    .then(res => {
        //console.log(res);
        let pitApi = res.json() as PITApi;  
        console.log(pitApi);
        return pitApi;})
    .catch(this.handleError);
  }

  getItemsIncome(): Promise<PITApi> {
    let params: URLSearchParams = new URLSearchParams();        
    //params.set('keysearch', projectId);
    //, {headers: new Headers({'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers':'Content-Type', 'Content-Type': 'application/json; charset=UTF-8' }) } 
    return this.http
    .get(this.itemsURL  )
    .toPromise()
    .then(res => {
        //console.log(res);
        let pitApi = res.json() as PITApi;  
        console.log(pitApi);
        return pitApi;})
    .catch(this.handleError);
  }

  getItemsAllowance(): Promise<PITApi> {
    let params: URLSearchParams = new URLSearchParams();        
    //params.set('keysearch', projectId);
    //, {headers: new Headers({'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers':'Content-Type', 'Content-Type': 'application/json; charset=UTF-8' }) } 
    return this.http
    .get(this.allowanceURL  )
    .toPromise()
    .then(res => {
        //console.log(res);
        let pitApi = res.json() as PITApi;  
        console.log(pitApi);
        return pitApi;})
    .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only

    //show dialog login
    return Promise.reject(error.message || error);
  }
}