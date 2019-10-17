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

  private title = this.appComponent.title;

  sidebarToggle(): void{
    this.appComponent.gridSidebarToggle(this.collapsed);
    this.collapsed=!this.collapsed;
  }

}
