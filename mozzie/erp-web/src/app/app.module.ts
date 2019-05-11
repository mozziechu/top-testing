import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
//import { InventoryComponent } from './inventory/inventory.component';
//import { HomeComponent } from './home/home.component';
//import { SetComponent } from './set/set.component';
//import { PicComponent } from './pic/pic.component';
import { NgxEchartsModule } from 'ngx-echarts';
//import { RouleComponent } from './roule/roule.component';
import { HomeRoutingModule } from './home/home-routing.module';

import { MainModule } from './main/main.module';

import { InventoryComponent } from './inventory/inventory.component';

//import { StorageComponent } from './storage/storage.component';
//import { StorageComponent } from './storage/storage.component';


//import { XueyuanComponent } from './xueyuan/xueyuan.component';

registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent

//  InventoryComponent

//  StorageComponent,

//  HomeComponent,
//  SetComponent,
//  ListComponent,
//  PicComponent,
//  RouleComponent,
//  XueyuanComponent
   
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    
    // MainModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
