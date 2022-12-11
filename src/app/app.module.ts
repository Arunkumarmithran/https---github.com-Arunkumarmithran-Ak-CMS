import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ProductionPanelComponent } from './production/production-panel/production-panel.component';
import { LoginComponent } from './admin/login/login.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HomeComponent } from './production/home/home.component';
import { MoviesComponent } from './production/movies/movies.component';
import { EventsComponent } from './production/events/events.component';
import { TeaserTrailerComponent } from './production/teaser-trailer/teaser-trailer.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './production/about/about.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { YoutubeDialogComponent } from './production/youtube-dialog/youtube-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    ProductionPanelComponent,
    LoginComponent,
    HomeComponent,
    MoviesComponent,
    EventsComponent,
    TeaserTrailerComponent,
    AboutComponent,
    YoutubeDialogComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    NgxHideOnScrollModule,
    DialogModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
