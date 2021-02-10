import { Component, OnInit } from '@angular/core';
import {Employee} from '../services/employee';
import {EmployeeService} from '../services/employee.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
    createEmpoyeeForm!: FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router,
              public employeeService: EmployeeService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
      this.createEmpoyeeForm = this.fb.group({
          id: [0],
          fname: ['', Validators.required],
          lname: ['', Validators.required],
          email: ['', Validators.email],
          age : ['', [Validators.min(18), Validators.max(65), Validators.pattern('^[0-9]*')]],
          department: ['', Validators.required]
      });

  }

    // createOrUpdateEmployee(currentEmployee: Employee) {
    //     if (currentEmployee.id === null) {
    //         this.createEmployee(currentEmployee);
    //     } else {
    //         this.updateEmployee(currentEmployee);
    //     }
    // }


    createEmployee(emp: Employee) {
        if (!this.createEmpoyeeForm.valid) {
            if ((this.createEmpoyeeForm.controls.age.value  > 18 || this.createEmpoyeeForm.controls.age.value  < 65)){
                this.employeeService.createEmployee(emp).subscribe(
                    (result: Employee) => {
                        this.employeeService.getAllEmployee();
                        this.toastrService.success('Employee created successfully !', 'Employee CRUD');
                        this.clearEmployee();
                    });
            }else{
                this.toastrService.error('Invalid Age ', 'Employee CRUD');
            }
        } else{
            this.toastrService.error('Fill the Required fields!! ', 'Employee CRUD');
        }
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
