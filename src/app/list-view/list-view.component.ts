import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  title = 'ToDo Listen';
  lists: string[];

  constructor() { }

  ngOnInit() {
    this.lists =[];                                       //initialize empty list to store list which should be shown
  }

  addList (id: string): void{
    id = id.trim();
    if (this.lists.indexOf(id) === -1 && id != "") {      //add list id to lists array only if not present in there
      this.lists.push(id)
    }
    else {                                                //else print to console
      console.log("This item already exists or is empty");
    }
  }
}
