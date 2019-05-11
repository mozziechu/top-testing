import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { SettingComponent } from './setting/setting.component';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';

const routes: Routes = [
  {
    path: 'testtwo',
    component: TestTwoComponent,
    outlet: 'name'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'testone',
        component: TestOneComponent
      },
      {
        path: 'setting',
        component: SettingComponent,
      },
      {
        path: 'testtwo',
        component: TestTwoComponent,
        outlet: 'name'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
