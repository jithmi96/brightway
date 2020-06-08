import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-Regstudent',
  templateUrl: './Regstudent.component.html',
  styleUrls: ['./Regstudent.component.css']
})
export class RegstudentComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
  }

  //email_errormessage
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  //password
  hide = true;

  //courses
  MSO2020_1 = false;
  GD2020_1 = false;
  WD2020_1 = false;
  AE2020_1 = false;
  CF2020_1 = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

}
