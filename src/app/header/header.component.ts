import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';
import { ThemeService } from '../theme.service';
import { FormControl } from '@angular/forms';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private collapsed: boolean = false;
    darkTheme = new FormControl(false);

    constructor(private appComponent: AppComponent, private themeService: ThemeService) {
        this.darkTheme.valueChanges.subscribe(value => {
            if (value) {
                this.themeService.toggleDark();
            } else {
                this.themeService.toggleLight();
            }
        });
    };

    ngOnInit() {
    }

    title = this.appComponent.title;

    sidebarToggle(): void {
        this.appComponent.gridSidebarToggle(this.collapsed);
        this.collapsed = !this.collapsed;
    }
}
