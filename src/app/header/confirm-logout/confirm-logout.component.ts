import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeaderComponent } from '../header.component';

@Component({
  selector: 'app-confirm-logout',
  templateUrl: './confirm-logout.component.html',
  styleUrls: ['./confirm-logout.component.css']
})
export class ConfirmLogoutComponent {
  constructor(public dialog:MatDialogRef<ConfirmLogoutComponent>){}
  confirm(){
     this.dialog.close('confirm');
  }
  cancel() {
     this.dialog.close('cancel');
  }
}
