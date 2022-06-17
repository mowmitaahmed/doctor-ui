import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  constructor(private router: Router) {
    let m: any = new Date().getMonth() + 1;
    // m = m.toString();
    console.log('page', m);

    // router.navigate([`/month/${{ m }}`]);
  }

  ngOnInit(): void {}
}
