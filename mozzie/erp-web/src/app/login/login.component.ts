import { Component, OnInit,Provider } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	validateForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router,
//		private http: HttpClient
	) { }

	ngOnInit(): void {
		this.validateForm = this.fb.group({
			userName: [null, [Validators.required]],
			password: [null, [Validators.required]],
			remember: [true]
		})
	}

	
	submitForm(): void {
		this.router.navigateByUrl('erp-web/home');
		// tslint:disable-next-line:forin
		for (const i in this.validateForm.controls) {
			this.validateForm.controls[i].markAsDirty();
			this.validateForm.controls[i].updateValueAndValidity();
		}
	}
	


}
export class LocalStorage {

    public localStorage:any;

    constructor() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.localStorage = localStorage;
    }

    public set(key:string, value:string):void {
        this.localStorage[key] = value;
    }

    public get(key:string):string {
        return this.localStorage[key] || false;
    }

    public setObject(key:string, value:any):void {
        this.localStorage[key] = JSON.stringify(value);
    }

    public getObject(key:string):any {
        return JSON.parse(this.localStorage[key] || '{}');
    }

    public remove(key:string):any {
        this.localStorage.removeItem(key);
    }
    
}
// export const LOCAL_STORAGE_PROVIDERS:any[] = [
//         Provider(LocalStorage, {useClass: LocalStorage})
// ]
