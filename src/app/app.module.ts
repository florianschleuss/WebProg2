import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './list/list.component';
import { ListViewComponent } from './list-view/list-view.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListComponent,
    ListViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }