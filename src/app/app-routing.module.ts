import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import { ListComponent } from './list/list.component'

const routes: Routes = [
  { path: '', redirectTo: '/list-view', pathMatch: 'full' },
  { path: 'list-view', component: ListViewComponent },
  { path: 'list/:id', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
