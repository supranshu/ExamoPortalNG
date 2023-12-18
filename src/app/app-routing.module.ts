import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';

// import { admiGuard } from './services/admi.guard';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path: 'admin',
    component:DashboardComponent,
    
    // canMatch:[admiGuard]
    
    children:[{
      path:'profile',
      component:ProfileComponent,
      
    },{
      path:'',
      component:WelcomeComponent
    }
  ]
  }, 
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full'
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
