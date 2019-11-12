import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { List } from './list'

@Injectable({
    providedIn: 'root'
})

export class ListService {

    private listUrl = 'https://shopping-lists-api.herokuapp.com/api/v1/lists/'; // URL to web api
    private apiKey = "2a54bd22f4d6114f201939cc135c28e3";

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.apiKey
        })
    };

    constructor(private http: HttpClient) {
    };

    private handleError<T>(result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    };
    getLists(): Observable<List[]> {
        return this.http.get<List[]>(this.listUrl, this.httpOptions)
    }

    getList(id: string): Observable<List> {
        if (id == undefined) { return; }
        return this.http.get<List>(this.listUrl.concat(id))
            .pipe(catchError(this.handleError<List>(new List()))
            );
    };

    addList(name: string): Observable<List> {
        return this.http.post<List>(this.listUrl, { name: name }, this.httpOptions)
            .pipe(catchError(this.handleError<List>(new List())));
    }

    remList(id: string): void {
        this.http.delete(this.listUrl.concat(id), this.httpOptions).subscribe()
        console.log('List ' + id + ' deletet')
    }

    addItem(id: string, name: string): Observable<List> {
        if (id == undefined) { return; }
        if (name == undefined) { return; }
        return this.http.post<List>(this.listUrl.concat(id).concat('/items'), { name: name })
            .pipe(catchError(this.handleError<List>(new List())));
    };

    remItem(id: string, itemId: string): Observable<List> {
        if (id == undefined) { return; }
        if (itemId == undefined) { return; }
        return this.http.delete<List>(this.listUrl.concat(id).concat('/items/').concat(itemId))
            .pipe(catchError(this.handleError<List>(new List())));
    };

    updateItem(id: string, itemId: string, bought: boolean): Observable<List> {
        if (id == undefined) { return; }
        if (itemId == undefined) { return; }
        return this.http.put<List>(this.listUrl.concat(id).concat('/items/').concat(itemId), { bought: bought })
    };
}