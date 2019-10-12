import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { List } from './list'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private id = '';
  private listUrl = 'https://shopping-lists-api.herokuapp.com/api/v1/lists/';  // URL to web api

  constructor(
  private http: HttpClient
  ) {  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  };

  getList (): Observable<List> {
    return this.http.get<List>(this.listUrl.concat(this.id))
    .pipe(catchError(this.handleError<List>('getList', new List()))
    );
  };

  addItem (name: string): Observable<List> {
    return this.http.post<List>(this.listUrl.concat(this.id).concat('/items'), {name: name})
  };

  remItem (itemId: string): Observable<List> {
    return this.http.delete<List>(this.listUrl.concat(this.id).concat('/items/').concat(itemId))
  };

  setId (id: string): void{
    this.id = id
  }

}
