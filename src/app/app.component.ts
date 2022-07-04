import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees!: Employee[];
  title: any;
  constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.getEmployees();
  }
  public getEmployees(): void{
    this.employeeService.getEmployee().subscribe(
      (Response: Employee[]) => {
        this.employees = Response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }
}
