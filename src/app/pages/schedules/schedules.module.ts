import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScheduleModule, RecurrenceEditorModule,DayService, WeekService,WorkWeekService,MonthService,} from '@syncfusion/ej2-angular-schedule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SchedulesComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    SchedulesRoutingModule,
    ScheduleModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    RecurrenceEditorModule,
    FormsModule,
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService],
})
export class SchedulesModule {}
