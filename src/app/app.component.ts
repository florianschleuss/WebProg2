import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    title = 'ToDo Listen';
    bodyStyle: any ={  }

    gridSidebarToggle(collapsed: boolean): void{
      if (!collapsed){
          this.bodyStyle = {
            gridTemplateColumns: '0em auto'
          }
        }
      else {
        this.bodyStyle = {}
      }
    }

    getStyles(): any{
      return this.bodyStyle;
    }
}
