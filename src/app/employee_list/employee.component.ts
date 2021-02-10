import { Component, OnInit } from '@angular/core';
import {Employee} from '../services/employee';
import {EmployeeService} from '../services/employee.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    searchValue = '';
    visible = false;
    filterTerm: string;

    constructor(public employeeService: EmployeeService, private toastrService: ToastrService, private router: Router) {
        this.filterTerm = '';
    }

  ngOnInit(): void {
      this.getAllEmployee();
  }

    getAllEmployee() {
        this.employeeService.getAllEmployee();
    }

    editEmployee(employee: Employee) {
        this.employeeService.currentEmployee = Object.assign({}, employee);
        this.toastrService.warning('Employee edited successfully !', 'Employee CRUD');
    }

    deleteEmployee(id: number) {
        this.employeeService.deleteEmployee(id).subscribe(
            (data) => {
                this.getAllEmployee();
                this.toastrService.error('Employee deleted successfully !', 'Employee CRUD');
            });
    }

    edit(id: number){
        this.employeeService.getViewCustomerId(id);
        this.router.navigate(['home/edit/'], {
            queryParams: { id }
        });
    }

    resetSearch(): void {
        this.searchValue = '';
        this.search();
    }

    search(): void {
        this.visible = false;
        // this.listOfData = this.users.filter((item: User) => item.name.indexOf(this.searchValue) !== -1);
    }

}
