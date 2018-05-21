import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { IndexComponent } from './index/index.component';
import { AppComponent } from './app.component';
// import { NavComponent } from './nav/nav.component';
// import { NavService } from './nav/nav.service';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { MaterialAppModule } from './ngmaterial.module';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { PropertyComponent } from './property/property.component';
import { PropertyCreateComponent } from './property-create/property-create.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyEditComponent } from './property-edit/property-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    // NavComponent,
    IndexComponent,
    PropertyComponent,
    PropertyCreateComponent,
    PropertyDetailComponent,
    PropertyEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    // MaterialAppModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    // MatRipple,
    NgbModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
