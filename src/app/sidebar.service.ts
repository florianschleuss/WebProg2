import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {

  private listUrl = 'https://shopping-lists-api.herokuapp.com/api/v1/lists/'; // URL to web api

  constructor() {
  };

}
