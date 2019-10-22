import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListService} from '../list.service';
import { List } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService, private route: ActivatedRoute) { }

  @Input()
  id : string;
  list: List;
  ngOnInit() {
    this.getList();
  };

  getList(): void {
    if(this.route.snapshot.paramMap.get('id')!=null){
      this.id = this.route.snapshot.paramMap.get('id');
    }
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



  //checked(item: any){
  //  document.getElementById("bought").style.textDecoration = "underline";
  //  console.log('under')
  //}

}
