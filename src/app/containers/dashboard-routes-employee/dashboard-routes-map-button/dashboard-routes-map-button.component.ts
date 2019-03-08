import { Component, OnInit, Input, Injectable, Output } from '@angular/core';
import { MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { Transport } from 'app/models/transports/transports.model';
import { Employees } from 'app/models/employees/employees.model';
import { TransportControllerService } from 'app/containers/transports/transports.service';
import { DashboardRoutesComponent } from 'app/containers/dashboard-routes/dashboard-routes.component';

@Component({
  selector: 'dashboard-routes-map-button',
  templateUrl: './dashboard-routes-map-button.component.html',
  styleUrls: ['./dashboard-routes-map-button.component.scss'],
})

@Injectable()
export class DashboardRoutesMapButtonComponent implements OnInit {

  isOpen: boolean;

  @Input()
  employees: any[] = [];

  @Input() transport: Transport;

  @Output()
  public userName;
 
  public data;
  public hora;

  employeeValue: any;
  
  constructor(
    private dialog: MatDialog,
    public snackBar: MatSnackBar,
    private apiTransport: TransportControllerService,
    private dialogRef: MatDialogRef<DashboardRoutesComponent>,
  ) {     
  }

  ngOnInit() {
    //console.log(this.transport);    
    this.employees = this.transport.routes.employees;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    //console.log('Dropdown: ' + this.transport.tracker.notes);
  }

  onClickOutside() {
    this.isOpen = false;
  }

  logout() {
  }

  excluirEmployee(employeeValue){
    console.log(employeeValue);

    let employeeValueJson = {};
        // The routing mode:
    employeeValueJson['employeeId'] = this.employeeValue._id;

    this.apiTransport.removerFuncionarioRota(this.transport, employeeValueJson).
      subscribe(
          success => {
              this.snackBar.open('Funcionário removido da rota com sucesso!', 'OK', {
                  duration: 10000
              });
              this.dialogRef.close();    
          },
          error => {
              console.log(error);
          });
  }

}

