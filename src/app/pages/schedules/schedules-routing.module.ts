import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulesComponent } from './schedules.component';

const m = new Date().getMonth() + 1;
const routes: Routes = [
  { path: '', component: SchedulesComponent },
  { path: 'month/:id', component: SchedulesComponent ,pathMatch: 'full'},
  // { path: `month/${{ m }}`, component: SchedulesComponent },
  {
    path: '**',
    // component: SchedulesComponent,
    redirectTo: `month/:id`,pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulesRoutingModule {}
