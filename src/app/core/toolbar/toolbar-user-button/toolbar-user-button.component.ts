import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'fury-toolbar-user-button',
  templateUrl: './toolbar-user-button.component.html',
  styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit {

  isOpen: boolean;
  private userName;

  constructor(
    private login: LoginService
  ) { }

  ngOnInit() {
    // this.userName = this.session.getState().admin.establishment.name;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  logout() {
    this.login.logout();
  }

}
