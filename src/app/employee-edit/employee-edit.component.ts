import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {EmployeeService} from '../services/employee.service';
import {ToastrService} from 'ngx-toastr';
import {Employee} from '../services/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              public employeeService: EmployeeService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

    updateEmployee(emp: Employee) {
        this.employeeService.updateEmployee(emp).subscribe(
            (result: Employee) => {
                this.employeeService.getAllEmployee();
                this.toastrService.info('Employee updated successfully !', 'Employee CRUD');
                this.clearEmployee();
            });
    }

    clearEmployee() {
        this.employeeService.currentEmployee = {
            id: 0,
            fname: '',
            lname: '',
            email: '',
            age: 0,
            address: '',
            department: '',
            imageUrl: ''
        };
    }
}
