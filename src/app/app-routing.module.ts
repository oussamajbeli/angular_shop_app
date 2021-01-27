import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowallComponent } from './showall/showall.component';
import {VestesComponent} from './vestes/vestes.component';
import {PontalonComponent} from './pontalon/pontalon.component';
import {VetementsComponent} from './vetements/vetements.component';
import { RegisterComponent } from './contact/register/register.component';
import { LoginComponent } from './contact/login/login.component';


const routes: Routes = [
  {path: "", component:ShowallComponent},
  {path: "vestes", component:VestesComponent},
  {path: "pontalon", component:PontalonComponent},
  {path: "vetements", component:VetementsComponent},
  {path: "register", component:RegisterComponent},
  {path: "login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
