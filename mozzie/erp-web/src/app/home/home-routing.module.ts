import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { SetComponent } from '../set/set.component';
import { PicComponent } from '../pic/pic.component';
import { ListComponent } from '../list/list.component';
import { RouleComponent } from '../roule/roule.component';
import { XueyuanComponent } from '../xueyuan/xueyuan.component';
import { InventoryComponent } from '../inventory/inventory.component';

import { ManagementComponent } from '../management/management.component';

import { ClienticonComponent } from '../clienticon/clienticon.component';

import { StorageComponent } from '../storage/storage.component';
import { AfterComponent } from '../after/after.component';
const routes: Routes = [{
	path: '',
	component: HomeComponent,
	children: [{
			path: 'set',
			component: SetComponent,
			data: {
				    breadcrumb: '设置'
				  }

		},
		{
			path: 'pic',
			component: PicComponent,
			data: {
				    breadcrumb:'生产检测'
				  }

		},
		{
			path: 'list',
			component: ListComponent,
			data: {
				    breadcrumb: '产品列表'
				  }

		},
		{
			path: 'roule',
			component: RouleComponent,
			data: {
				    breadcrumb: '权限分配'
				  }

		},
		{
			path: 'xueyuan',
			component: XueyuanComponent,
			data: {
				    breadcrumb: '成员列表'
				  }

		},
		{
			path: 'inventory',
			component: InventoryComponent,
			data: {
				    breadcrumb: '仓库储存'
				  }
		},
		{ 
			path: 'management', 
			component: ManagementComponent ,
			data: {
				    breadcrumb: '客户集群'
				  }
		},

		{
			path: 'clienticon',
			component: ClienticonComponent,
			data: {
				    breadcrumb: '客户情况'
				  }

		},
		{
			path: 'after',
			component:AfterComponent,
			 data: {
				    breadcrumb: '供货商-售后'
				  }

		},

		{
			path: 'storage',
			component: StorageComponent,
			  data: {
				    breadcrumb: '仓储情况'
				  }
		},
		
	]

}];

@NgModule({
	declarations: [],
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule {}