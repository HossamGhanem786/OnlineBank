import { Component, OnInit } from '@angular/core';
import {Appointment} from '../../models/appointment';
import {AccountService} from '../../service/account.service';
import {Router} from '@angular/router';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import {MatDialog} from '@angular/material';
import {ConfirmAppointmentComponent} from '../confirm-appointment/confirm-appointment.component';
import {AppointmentService} from '../../service/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  public appointment: Appointment = new Appointment();
  nowt: string;
  short: any;
  locations = ['Mahmoudia', 'Alex', 'Damnhour', 'Tanta', 'Cairo'];
  constructor(private appointmentService: AppointmentService , private router: Router, private dialog: MatDialog  ) { }

  ngOnInit() {
   this.nowt = moment(this.appointment.date).format('YYYY-MM-DD hh:mm a');
  }
  onSubmit() {
    const dialogRef =  this.dialog.open(ConfirmAppointmentComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.ngOnInit();
      } else {
        this.appointment = {
          date: moment(this.appointment.date).format('YYYY-MM-DD hh:mm a'),
          location: this.appointment.location,
          description: this.appointment.description
      };

        console.log(this.appointment);
        this.appointmentService.saveAppointment(this.appointment).subscribe((res) => {
            this.router.navigate(['/home']);
            console.log(res.body );
          },
          (err) => {
            console.log('problem occur', err.error);
          });
    }
  });
}
}
