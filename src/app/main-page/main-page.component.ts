import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as ElementQueries from 'css-element-queries/src/ElementQueries';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    (<any>ElementQueries).init();
  }

  ngAfterViewInit() {
    
  }
}
