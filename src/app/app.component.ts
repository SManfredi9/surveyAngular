import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogTemplateComponent } from "./dialog-template/dialog-template.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }

  openSignup(){
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.id           = "login-component";
    config.height       = "350px";
    config.width        = "600px";
    config.data         = {
      title: "SignUp",
      component: "signup",
    }
    const dialogRef = this.dialog.open(DialogTemplateComponent, config);
  }


  openLogin() {
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.id           = "login-component";
    config.height       = "350px";
    config.width        = "600px";
    config.data         = {
      title: "Login",
      component: "login",
    }
    const dialogRef = this.dialog.open(DialogTemplateComponent, config);
  }


}

