import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './production/about/about.component';
import { EventsComponent } from './production/events/events.component';
import { HomeComponent } from './production/home/home.component';
import { MoviesComponent } from './production/movies/movies.component';
import { ProductionPanelComponent } from './production/production-panel/production-panel.component';
import { TeaserTrailerComponent } from './production/teaser-trailer/teaser-trailer.component';
import { YoutubeDialogComponent } from './production/youtube-dialog/youtube-dialog.component';

const routes: Routes = [
  {path:'',component:ProductionPanelComponent,
children:[
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path:'events',component:EventsComponent},
  {path:'teaser/trailer',component:TeaserTrailerComponent},
    {path:'movies',component:MoviesComponent},  

]},
{ path: 'admin', component: LoginComponent },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
