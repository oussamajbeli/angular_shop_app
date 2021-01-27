import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitreComponent } from './titre/titre.component';
import { NavbareComponent } from './navbare/navbare.component';
import { VestesComponent } from './vestes/vestes.component';
import { PontalonComponent } from './pontalon/pontalon.component';
import { VetementsComponent } from './vetements/vetements.component';
import { RegisterComponent } from './contact/register/register.component';
import { LoginComponent } from './contact/login/login.component';
import { ShowallComponent } from './showall/showall.component';

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    NavbareComponent,
    VestesComponent,
    PontalonComponent,
    VetementsComponent,
    RegisterComponent,
    LoginComponent,
    ShowallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
