import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import { PropertyComponent } from "./property/property.component"
import { PropertyCreateComponent} from "./property-create/property-create.component";
import { PropertyDetailComponent} from "./property-detail/property-detail.component";
import {PropertyEditComponent} from "./property-edit/property-edit.component";

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'properties', component: PropertyComponent , data: { title: 'Property List'}},
  {path: 'property-create', component: PropertyCreateComponent , data: { title: 'Add Property'}},
  {path: 'property-details/:id', component: PropertyDetailComponent , data: { title: 'Property Details'}},
  {path: 'property-edit/:id', component: PropertyEditComponent , data: { title: 'Edit Property'}},
  {path: 'index', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}