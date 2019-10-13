import { Component, OnInit, Input } from '@angular/core';

import { ListService} from '../list.service';
import { List } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService) { }

  @Input()
  id : string;
  list: List;

  ngOnInit() {
    this.getList();
    console.log(this.id);
  };


  getList(): void {
    this.listService.getList(this.id)
      .subscribe(list => this.list = list);
  };

  addItem(name: string): void {
    name = name.trim();
    if (!name) {console.log('Empty Field'); return; };
    this.listService.addItem(this.id, name).subscribe(list => this.list = list);
    console.log(this.id + name);
  };

  remItem(itemId: string): void {
    this.listService.remItem(this.id, itemId)
      .subscribe(list => this.list = list);
  }

  changeItem(itemId: string): void {
    console.log(itemId);
  }

}
