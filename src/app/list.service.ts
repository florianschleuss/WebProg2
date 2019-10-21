import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { List } from './list'

@Injectable({                                                                 //made it @Injectable in 'root' so every component in this project
  providedIn: 'root'                                                          //can use this service
})

export class ListService {

  private listUrl = 'https://shopping-lists-api.herokuapp.com/api/v1/lists/'; // URL to web api

  constructor( private http: HttpClient ) {
  };

  private handleError<T> (result?: T) {                                       //configurable error handler for network issues
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  };

  //Methods to manipulate and get lists via web api
  //Error handling: handleError() method

  getList (id: string): Observable<List> {
    return this.http.get<List>(this.listUrl.concat(id))
    .pipe(catchError(this.handleError<List>(new List()))
    );
  };

  addItem (id: string, name: string): Observable<List> {
    return this.http.post<List>(this.listUrl.concat(id).concat('/items'), {name: name})
    .pipe(catchError(this.handleError<List>(new List())));
  };

  remItem (id: string, itemId: string): Observable<List> {
    return this.http.delete<List>(this.listUrl.concat(id).concat('/items/').concat(itemId))
    .pipe(catchError(this.handleError<List>(new List())));
  };

  updateItem (id: string, itemId: string, bought: boolean): Observable<List> {
    return this.http.put<List>(this.listUrl.concat(id).concat('/items/').concat(itemId),{bought: bought})
  };
}
