import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListService } from '../list.service';
import { List } from '../list';
import { ThemeService } from '../theme.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    darkTheme = new FormControl(false);

    constructor(private listService: ListService, private route: ActivatedRoute, private themeService: ThemeService) {
        this.darkTheme.valueChanges.subscribe(value => {
            if (value) {
                this.themeService.toggleDark();
            } else {
                this.themeService.toggleLight();
            }
        });
    }

    @Input()
    id: string;
    list: List;

    ngOnInit() {
        this.getList();
        //this.route.params.subscribe(params => {
        //  console.log(params.id)
        //	if (params.id != undefined && params.id != this.id){
        //    location.reload();
        //  }
        //});
    };

    getList(): void {
        if (this.route.snapshot.paramMap.get('id') != null) {
            this.id = this.route.snapshot.paramMap.get('id');
        }
        this.listService.getList(this.id)
            .subscribe(list => this.list = list);
    }

    delList(id: string): void {
        if (confirm('Wollen Sie die Liste wirklich löschen?')) {
            this.listService.remList(id);
        };
    }

    addItem(name: string): void {
        name = name.trim();
        if (!name) { console.log('Empty Field'); return; };
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
