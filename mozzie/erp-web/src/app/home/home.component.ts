import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent {
	isCollapsed = false;
	title = 'ANTDEMO';
	toggleCollapsed(): void {
		this.isCollapsed = !this.isCollapsed;
	};
	onChange(status: boolean) {
		console.log(status);
	}
	constructor(
		private router: Router
	){}
	
	/**
	 * 注销登录
	 */
	signout(){
		this.router.navigateByUrl('erp-web/login');
	}
	
}
  
  

