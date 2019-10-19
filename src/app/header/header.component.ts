import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private collapsed: boolean = false;

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
  }

    title = this.appComponent.title;

  sidebarToggle(): void{
    this.appComponent.gridSidebarToggle(this.collapsed);
    this.collapsed=!this.collapsed;
  }


  showTime(): void {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59

    var time = h + ":" + m + ":" + s;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    }

    x = setInterval (() => {this.showTime ();}, 1000);

}
