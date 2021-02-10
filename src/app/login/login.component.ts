import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {EmployeeService} from "../services/employee.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              public employeeService: EmployeeService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

     authenticate() {
        // Authentication code goes here

    }

}
