import { Component, OnInit, Input } from '@angular/core';

import { ListService } from '../list.service';
import { SidebarService } from '../sidebar.service';
import { ThemeService } from '../theme.service';
import { FormControl } from '@angular/forms';



@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

    @Input()
    lists: any[];
    allLists: any[];

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
        this.listService.getLists().subscribe(lists => this.allLists = lists);
        this.lists = this.sidebarService.getLists();
    };

    copyMessage(val: string) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
}
