import { Component, OnInit } from '@angular/core';
import {Appointment} from '../../models/appointment';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';
import {UiService} from '../../service/ui.service';
import {AppointmentService} from '../../service/appointment.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  public appointmentList: Appointment[];
  dataSource = new MatTableDataSource(this.appointmentList);
  displayedColumns = ['id', 'username', 'date', 'location', 'description', 'confirmed', 'action'];

  constructor(private appointmentService: AppointmentService, private router: Router, private uiService: UiService) {
  }

  ngOnInit() {
    this.getAppointmentList();

  }

  comfirmAppointment(id: number) {
    this.appointmentService.confirmAppointment(id).subscribe( res => {
      this.uiService.showSnackBar('Appointment Confirmed Successfully!!', 'Success', 3000);
      this.ngOnInit();
    }, err => {
      console.log('failed   ' + err);
    });
  }


  getAppointmentList() {
    this.appointmentService.getAppointmentList().subscribe( res => {
      this.dataSource = res.body;
      console.log(res.body);
    }, err => {
      console.log(err);
    });
  }
}
