import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegstudentComponent } from './Regstudent/Regstudent.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'Regstudent', component: RegstudentComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'log', component: LogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
