import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ProductionPanelComponent } from './production/production-panel/production-panel.component';
import { LoginComponent } from './admin/login/login.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HomeComponent } from './production/home/home.component';
import { AboutComponent } from './production/about/about.component';
import { MoviesComponent } from './production/movies/movies.component';
import { EventsComponent } from './production/events/events.component';
import { TeaserTrailerComponent } from './production/teaser-trailer/teaser-trailer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    ProductionPanelComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    EventsComponent,
    TeaserTrailerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
