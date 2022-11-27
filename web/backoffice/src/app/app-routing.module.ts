import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  // {
  //   path:"auth",
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
  {
    path: 'dashbord',
    loadChildren: () => import('./dashbord/dashbord.module').then(m => m.DashbordModule)
  },
  { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashbord', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }