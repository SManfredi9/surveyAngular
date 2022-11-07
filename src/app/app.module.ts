import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterLinkActive, RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { PartecipaComponent } from './partecipa/partecipa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { DialogTemplateComponent } from './dialog-template/dialog-template.component';
import {MatIconModule} from "@angular/material/icon";
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PartecipaComponent,
    DialogTemplateComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLinkWithHref,
    RouterOutlet,
    RouterLinkActive,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
