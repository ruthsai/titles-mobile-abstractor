import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Grocery } from "./grocery";

@Injectable()
export class GroceryListService {
  constructor(private http: Http) { }

  load() {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + Config.token);

    // return this.http.get(Config.apiUrl + "Groceries", {
    //   headers: headers
    // })
    return this.http.post(Config.apiUrl, {
      headers: headers
    })
      .map(res => res.json())
      .map(data => {
        console.log("Data:", data);
        console.log("Data 2:", data.json());
        // let groceryList = [];
        // data.Result.forEach((grocery) => {
        //   groceryList.push(new Grocery(grocery.Id, grocery.Name));
        // });
        return data.json();
      })
      .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}