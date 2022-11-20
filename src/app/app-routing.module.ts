import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ProductionPanelComponent } from './production/production-panel/production-panel.component';

const routes: Routes = [
  { path: '', component: ProductionPanelComponent },
  { path: 'admin', component: AdminDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
