import { Component, OnInit } from '@angular/core';
import { PermissionsService } from '../canActivate/permissions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public permissionService: PermissionsService) { }

  ngOnInit(): void {
  }

}
