import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { NgxEchartsModule } from 'ngx-echarts';

import { HomeComponent } from './home.component';
import { SetComponent } from '../set/set.component';
import { PicComponent } from '../pic/pic.component';
import { ListComponent } from '../list/list.component';
import { RouleComponent } from '../roule/roule.component';
import { HomeRoutingModule } from './home-routing.module';
import { XueyuanComponent } from '../xueyuan/xueyuan.component';
import { InventoryComponent } from '../inventory/inventory.component';
import { ManagementComponent } from '../management/management.component';


import { ClienticonComponent } from '../clienticon/clienticon.component';

import { AfterComponent } from '../after/after.component';


import { StorageComponent } from '../storage/storage.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
   SetComponent,
    ListComponent,
    PicComponent,
    RouleComponent,
    HomeComponent,
    XueyuanComponent,
    InventoryComponent,
    ManagementComponent,
    ClienticonComponent,
    StorageComponent,
    AfterComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule,
    NgxEchartsModule,
    FormsModule
  ]
})
export class HomeModule { }
