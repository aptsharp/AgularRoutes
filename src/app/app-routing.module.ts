import { ReportsComponent } from "./pages/reports/reports.component";
import { MasterComponent } from "./pages/master/master.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
      path: '',
      component: MasterComponent,
      children: [
      { path: '', component: HomeComponent },
      { path: 'reports', component: ReportsComponent },
      ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
