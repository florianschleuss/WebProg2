import { Component, OnInit, Input } from '@angular/core';

import { ListService} from '../list.service';
import { SidebarService} from '../sidebar.service';
import { List } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService, private sidebarService: SidebarService) { }

  @Input()
  id : string;
  list: List;
  ngOnInit() {
    this.getList();
  };

  clock = setInterval (() => {this.showTime ();}, 1000);


  getList(): void {
    this.listService.getList(this.id)
      .subscribe(list => this.list = list);
  }

  addItem(name: string): void {
    name = name.trim();
    if (!name) {console.log('Empty Field'); return; };
    this.listService.addItem(this.id, name).subscribe(list => this.list = list);
  };

  remItem(itemId: string): void {
    this.listService.remItem(this.id, itemId)
      .subscribe(list => this.list = list);
  }

  changeItem(item: any): void {
    this.listService.updateItem(this.id, item._id, !item.bought).subscribe(list => this.list = list);
  }



  checked(item: any){
    document.getElementById("bought").style.textDecoration = "underline";
    console.log('under')
  }

}
