import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { SettingComponent } from './setting/setting.component';
import { MainRoutingModule } from './main-routing.module';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';

@NgModule({
  declarations: [
    MainComponent,
    SettingComponent,
    TestOneComponent,
    TestTwoComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
