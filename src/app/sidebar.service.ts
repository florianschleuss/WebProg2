import { Injectable } from '@angular/core';

import { ListService} from './list.service';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {

  private sidebarId: string[] = [];
  private sidebarElements: string[] = [];

  constructor(private listService: ListService) {
  };

  addList (id: string): void{
    id = id.trim();
    if (this.sidebarId.indexOf(id) === -1 && id != "") {
      this.sidebarId.push(id);
      this.idToName(id);
    }
    else {
      console.log("This item already exists or is empty");
    }
  };

  getLists(): any[]{
    return this.sidebarElements;
  }

  idToName(id: string): void{
    var name: string;
    console.log(id);
    this.listService.getList(id).toPromise().then(list => {
      this.sidebarElements.push( list.name );
    });
  }
}
