import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatOption, MatOptionSelectionChange} from '@angular/material/core';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { extend } from '@syncfusion/ej2-base';
import { Subscription } from 'rxjs';
import { Month } from 'src/app/interfaces/month';
import { resourceSampleData } from 'src/app/assets/data';
// import { resourceSampleData } from 'src/assets/data';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css'],
  // animations: [myNgIfAnimation]
})
export class SchedulesComponent implements OnInit, OnDestroy {
  // Subscriptions
  private subAcRoute: Subscription;
  selected: any;

  // Month List
  months: Month[] = [
    {
      _id: 1,
      name: 'January',
    },
    {
      _id: 2,
      name: 'February',
    },
    {
      _id: 3,
      name: 'March',
    },
    {
      _id: 4,
      name: 'April',
    },
    {
      _id: 5,
      name: 'May',
    },
    {
      _id: 6,
      name: 'June',
    },
    {
      _id: 7,
      name: 'July',
    },
    {
      _id: 8,
      name: 'August',
    },
    {
      _id: 9,
      name: 'September',
    },
    {
      _id: 10,
      name: 'October',
    },
    {
      _id: 11,
      name: 'November',
    },
    {
      _id: 12,
      name: 'December',
    },
  ];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // GET PAGE FROM QUERY PARAM
    this.subAcRoute = this.activatedRoute.paramMap.subscribe((param) => {
      console.log(param);

      if (param) {
        const id: any = param.get('_id');
        let len: any = id - 0;
        this.selected = this.months[len];
        console.log('Schedules', this.selected);
      } else {
        const m = new Date().getMonth() + 1;
      }
    });
  }
  public ownerCollections: Object[] = [
    { OwnerText: 'Margaret', OwnerId: 1, Color: '#ea7a57' },
    { OwnerText: 'Robert', OwnerId: 2, Color: '#df5286' },
    { OwnerText: 'Laura', OwnerId: 3, Color: '#865fcf' },
  ];

  public setView: View = 'Month';
  public allowMultiple: Boolean = true;
  public selectedDate: Date = new Date();
  public resourceDataSource: Object[] = this.ownerCollections;
  public eventSettings: EventSettingsModel = {
    dataSource: <Object[]>extend([], resourceSampleData, null, true),
    fields: {
      // subject: {name: First}
    }
  };

  public dateParser(data: string) {
    return new Date(data);
  }

  onSelectMonth(event: MatOptionSelectionChange) {
    console.log('Event', event);

    if (event) {
      const month = event.source.value._id;
      console.log('event.isUserInput', month);
      this.router.navigate([`month`], {
        queryParams: month,
      });
    }
  }
  /**
   * ON DESTROY
   */
  ngOnDestroy() {
    if (this.subAcRoute) {
      this.subAcRoute.unsubscribe();
    }
  }
}
