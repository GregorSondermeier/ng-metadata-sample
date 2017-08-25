import {Inject, Injectable} from 'ng-metadata/core';
import {Uribuilder} from '../_vanilla/Uribuilder';
import {TodoSearchcriteria} from './_models/TodoSearchcriteria';
import {compact} from '../_vanilla/functions';
import {Todo} from './_models/Todo';

@Injectable('TodoApiService')
export class TodoApiService implements gs.IApiService {

	constructor(
		@Inject("$http") private $http: ng.IHttpService
	) {}

	public $search(searchcriteria: TodoSearchcriteria): ng.IHttpPromise<any> {
		return this.$http({
			method: 'POST',
			url: Uribuilder.Instance.getRestUri('todo', 'search'),
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			withCredentials: true,
			data: searchcriteria.update('selector', (selector) => {
				return compact(selector);
			})
		});
	}

	public $create(todo: Todo): ng.IHttpPromise<gs.ICouchDbOperationResponse> {
		return this.$http({
			method: 'POST',
			url: Uribuilder.Instance.getRestUri('todo', 'create'),
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			withCredentials: true,
			data: todo
		});
	}

	public $read(id: string): ng.IHttpPromise<gs.todo.ITodo> {
		return this.$http({
			method: 'GET',
			url: Uribuilder.Instance.getRestUri('todo', 'read', id),
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			withCredentials: true
		});
	}

	public $update(todo: Todo): ng.IHttpPromise<gs.ICouchDbOperationResponse> {
		return this.$http({
			method: 'PUT',
			url: Uribuilder.Instance.getRestUri('todo', 'update', todo._id),
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			withCredentials: true,
			data: todo
		})
	}
}