import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../sidebar.service'

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  title = 'ToDo Listen';
  lists: string[] = [];

  constructor(private sidebarService: SidebarService) { };

  ngOnInit() {
    if(this.lists = []){
      for (var id of this.sidebarService.getIdLists()) {
        this.addList(id);
      }
    }
  }

  addList (id: string): void{
    id = id.trim();
    if (this.lists.indexOf(id) === -1 && id != "") {
      this.lists.push(id);
    this.sidebarService.addList(id);
    }
    else {
      console.log("This item already exists in List-View or is empty");
    }
  };
}
