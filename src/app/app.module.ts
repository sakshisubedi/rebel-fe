import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/shared/modules/material.module';
import { BrandService } from './services/brand.service';
import { HttpClientModule } from '@angular/common/http';
import { BrandListComponent } from './brand-list/brand-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [BrandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
