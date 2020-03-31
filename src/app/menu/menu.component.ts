import { Component, OnInit } from '@angular/core';
import { faEllipsisH, faEllipsisV, faWrench, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public extendedMenu = true;
  public faEllipsisH = faEllipsisH;
  public faEllipsisV = faEllipsisV;
  public faWrench = faWrench;
  public faUser = faUser;
  public faCog = faCog;

  constructor() { }

  ngOnInit(): void {
  }

}
