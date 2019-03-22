import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'forgot-pwd',
    component:ForgotPwdComponent
  },
  {
    path:'',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  { 
    path: '', 
    redirectTo: 'login' ,
    pathMatch:'full'
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
