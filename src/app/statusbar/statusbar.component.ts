import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.scss']
})
export class StatusbarComponent implements OnInit {
  public faBars = faBars;

  constructor() { }

  ngOnInit(): void {
  }
}
