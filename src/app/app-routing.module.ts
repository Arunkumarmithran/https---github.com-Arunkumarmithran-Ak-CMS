import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { ProductionPanelComponent } from './production/production-panel/production-panel.component';

const routes: Routes = [
  { path: '', component: ProductionPanelComponent },
  { path: 'admin', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
