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

    x = setInterval (() => {this.showTime ();}, 1000);

}
