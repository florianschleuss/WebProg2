import { Component, OnInit } from '@angular/core';

import { ListService} from '../list.service';
import { List } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService) { }

  list: List;
  id: string = '5d931253ac8b120017a74aa5';

  ngOnInit() {
    this.listService.setId(this.id);
    this.getList();
  };


  getList(): void {
    this.listService.getList()
      .subscribe(list => this.list = list);
  };

  addItem(name: string): void {
    name = name.trim();
    if (!name) {console.log('Empty Field'); return; };
    this.listService.addItem(name).subscribe(list => this.list = list);
  };

  remItem(itemId: string): void {
    this.listService.remItem(itemId)
      .subscribe(list => this.list = list);
  }

  changeItem(itemId: string): void {
    console.log(itemId);
  }

}
