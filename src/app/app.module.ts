import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './list/list.component';
import { ListViewComponent } from './list-view/list-view.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule }     from './app-routing.module';
import { ThemeService } from './theme.service';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SidebarComponent, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
