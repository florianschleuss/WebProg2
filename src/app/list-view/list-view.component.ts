import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../sidebar.service';
import { ListService } from '../list.service';
import { ThemeService } from '../theme.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

    title = 'ToDo Listen';
    lists: string[] = [];

    darkTheme = new FormControl(false);

    constructor(private sidebarService: SidebarService, private themeService: ThemeService, private listService: ListService) {
        this.darkTheme.valueChanges.subscribe(value => {
            if (value) {
                this.themeService.toggleDark();
            } else {
                this.themeService.toggleLight();
            }
        });
    };

    ngOnInit() {

        this.listService.getLists();

        if (this.lists = []) {
            for (var id of this.sidebarService.getIdLists()) {
                this.addList(id);
            }
        }
    }

    addList(inp: string): void {
        inp = inp.trim();

        if (inp.length == 24) {
            var id = inp;
            if (this.lists.indexOf(id) === -1 && id != "") {
                this.lists.push(id);
                this.sidebarService.addList(id);
            }
            else {
                console.log("This item already exists in List-View or is empty");
            }
        }
        else if (inp.length != 0) {
            console.log(inp)
            this.listService.addList(inp).subscribe(list => this.addList(list._id));
        }

    };
}

//Funktion zum automatischen Einfügen aus dem Clipboard
  //async function paste(input) {
  //  const text = await navigator.clipboard.readText();
  //  input.value = text;
