import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { FindComponent } from './find/find.component';
import { ViewComponent } from './view/view.component';

import { IncidentCreateComponent } from './incident/incident-create/incident-create.component';
import { IncidentViewComponent } from './incident/incident-view/incident-view.component';

const routes: Routes = [
  { path: '', component: CreateComponent},
  { path: 'find', component: FindComponent},
  { path: 'view', component: ViewComponent},
  { path: 'incident-create', component: IncidentCreateComponent},
  { path: 'incident-view', component: IncidentViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
