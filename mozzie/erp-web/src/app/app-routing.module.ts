import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
//import { HomeComponent } from './home/home.component';
//import { SetComponent } from './set/set.component';
//import { PicComponent } from './pic/pic.component';
//import { ListComponent } from './list/list.component';
//import { RouleComponent } from './roule/roule.component';
//import { XueyuanComponent } from './xueyuan/xueyuan.component';




const routes: Routes = [
  { path: '', redirectTo: '/erp-web/home', pathMatch: 'full' },
  // { path: '', redirectTo: 'erp-web/login', pathMatch: 'full' },
  { path: 'erp-web/login', component: LoginComponent },
  
//{ path: 'erp-web/home', component: HomeComponent },
//{
//  path: 'erp-web/home/set', component: SetComponent
//},
//{
//  path: 'erp-web/home/pic', component: PicComponent
//},
//{
//  path: 'erp-web/home/list', component: ListComponent
//},
//{
//  path: 'erp-web/home/roule', component: RouleComponent
//},
  {
    path: 'erp-web/main',
    loadChildren: './main/main.module#MainModule',
    data: { preload: true }
  },
//{
//	path: 'erp-web/xueyuan',
//	component: XueyuanComponent
//},
   {
    path: 'erp-web/home',
    loadChildren: './home/home.module#HomeModule',
    data: { preload: true }
  },


];


@NgModule({
	imports: [RouterModule.forRoot(routes, {
		enableTracing: true
	})],
	exports: [RouterModule]
})
export class AppRoutingModule {}