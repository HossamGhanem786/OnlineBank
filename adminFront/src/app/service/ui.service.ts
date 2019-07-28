import { Injectable } from '@angular/core';
import {
  MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  // horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  // verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private matsnackbar: MatSnackBar) { }
  showSnackBar(message, action, duration) {
    const config = new MatSnackBarConfig();
    config.duration = duration;
    config.panelClass = ['red-snackbar'];
    this.matsnackbar.open(message, action, config);
  }

}
