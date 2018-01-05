import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from "@angular/http";
import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import {HeroService} from "./hero.service";
import {HeroComponent} from "./hero.component";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app.routing.module";
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import {HeroSearchComponent} from "./hero-search.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  providers :[HeroService],
  bootstrap: [ AppComponent ]
  })

export class AppModule { }
