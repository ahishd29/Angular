import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  userSettings : UserSettings = {
    name : 'Ahish',
    emailOffers : true,
    interfaceStyle: '',
    subscriptionType : 'Monthly',
    notes : 'something...'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
