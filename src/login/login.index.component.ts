import {Component} from 'ng-metadata/core';
import {LoginApiService} from './login.api.service';

@Component({
	selector: 'gsc-login',
	template: require('./login.index.component.html')
})
export class LoginIndexComponent {

	constructor(
		private loginApiService: LoginApiService
	) {}

	public credentials: {name: string, password: string} = {
		name: '',
		password: ''
	};

	public login() {
		this.loginApiService.$create(this.credentials);
	}
}