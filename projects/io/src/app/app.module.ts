import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app.routing';
import { MatListModule } from '@angular/material/list';
import { NgEzNestedNavModule } from '@ngez/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    NgEzNestedNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
