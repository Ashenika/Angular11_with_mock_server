import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs/index';
import {Employee} from './employee';
import {catchError} from 'rxjs/internal/operators';
import {NgxSpinnerService} from 'ngx-spinner';

const headerOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    allEmployee: Employee[];
    employeeEdit: Employee = {
        id: 0,
        fname: '',
        lname: '',
        email: '',
        age: 0,
        address: '',
        department: '',
        imageUrl: ''
    };
    private apiServer = 'http://localhost:3000/employees';

    currentEmployee: Employee = {
        id: 0,
        fname: '',
        lname: '',
        email: '',
        age: 0,
        address: '',
        department: '',
        imageUrl: ''
    }

  constructor(private http: HttpClient, private ngxSpinnerService: NgxSpinnerService) {
      this.allEmployee = [];
  }

    getAllEmployee() {
        this.ngxSpinnerService.show();
        return this.http.get<Employee[]>(this.apiServer, headerOption).subscribe(
            (data: Employee[]) => {
                this.allEmployee = data;
                console.table(this.allEmployee);
                setTimeout(() => {
                    this.ngxSpinnerService.hide();
                }, 500);
            });
    }

    deleteEmployee(id: number): Observable<Employee> {
        return this.http.delete<Employee>(this.apiServer + '/' + id, headerOption);
    }

    createEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.apiServer, employee, headerOption);
    }

    updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(this.apiServer + '/' + employee.id, employee, headerOption);
    }

    getViewCustomerId(id: number) {
        this.ngxSpinnerService.show();
        return this.http.get<Employee>(this.apiServer + '/' + id, headerOption).subscribe(
            (data: Employee) => {
                this.employeeEdit = data;
                console.table(this.employeeEdit);
                setTimeout(() => {
                    this.ngxSpinnerService.hide();
                }, 500);
            });
    }
}
