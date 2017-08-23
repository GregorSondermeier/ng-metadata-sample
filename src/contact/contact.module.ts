import {NgModule} from 'ng-metadata/core';

import {ContactConfig} from './contact.config';
import {ContactApiService} from './contact.api.service';
import {ContactIndexComponent} from './contact.index.component';
import {ContactListComponent} from './list/contact.list.component';
import {ContactSearchcardComponent} from './searchcard/contact.searchcard.component';

@NgModule({
	providers: [
		ContactConfig,
		ContactApiService
	],
	declarations: [
		ContactIndexComponent,
		ContactListComponent,
		ContactSearchcardComponent
	]
})
export class ContactModule {}