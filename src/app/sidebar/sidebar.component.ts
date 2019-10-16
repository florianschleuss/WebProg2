import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  @Input()
  lists: string[];

  constructor() {
  };

  ngOnInit() {
        this.lists = [];
  };

  addToNav(name: string){
    this.lists.push(name);
    console.log(this.lists)
  }
}
