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

  pad(x: number) {
      return (x < 10 ? '0' : '') + x
  }

  showTime(): void {
    var date = new Date();
    var h = this.pad(date.getHours()); // 0 - 23
    var m = this.pad(date.getMinutes()); // 0 - 59
    var s = this.pad(date.getSeconds()); // 0 - 59

    var time: string = h + ":" + m + ":" + s;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
  }

  checked(item: any){
    document.getElementById("bought").style.textDecoration = "underline";
    console.log('under')
  }

}
