import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  lists: string[];

  constructor() { }

  ngOnInit() {
    this.lists =[];
    this.lists.push('5d931253ac8b120017a74aa5');
    this.lists.push('5da07da69cbe830017d47ebb');
    console.log(this.lists);
  }

}
