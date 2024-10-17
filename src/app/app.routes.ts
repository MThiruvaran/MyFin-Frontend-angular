import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'user-dashboard', component:UserDashboardComponent, canActivate:[AuthGuardService]},
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'**',redirectTo:'/login'}
];
