import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    title = 'ToDo App';
    bodyStyle: any = {}
    navStyle: any = {}

    gridSidebarToggle(collapsed: boolean): void {
        if (!collapsed) {
            this.bodyStyle = {
                gridTemplateColumns: '0em auto'
            };
            this.navStyle = {
                display: 'none'
            };
        }
        else {
            this.bodyStyle = {};
            this.navStyle = {};
        }
    };

    getBody(): any {
        return this.bodyStyle;
    };

    getNav(): any {
        return this.navStyle;
    }
}
