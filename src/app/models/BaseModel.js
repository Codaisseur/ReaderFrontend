import feathers from 'feathers-client';
import Utils from '../lib/Utils';

class BaseModel {
  defaults() { return {}; }

  constructor(host, resource_name) {
		this.socket = io(host);
		this.app = feathers().configure(feathers.socketio(this.socket));
		this.service = this.app.service(Utils.pluralize(resource_name));
		this.onChanges = [];
		this.resources = [];

		this.service.find(function(error, resources) {
			this.resources = resources;
			this.inform();
		}.bind(this));

		this.service.on('created', this.createResource.bind(this));
		this.service.on('updated', this.updateResource.bind(this));
		this.service.on('removed', this.removeResource.bind(this));
	}

	subscribe(onChange) {
		this.onChanges.push(onChange);
	}

	inform() {
		this.onChanges.forEach((cb) => { cb(); });
	}

	createResource(resource) {
		this.resources = this.resources.concat(resource);
		this.inform();
	}

	updateResource(resource) {
		this.resources = this.resources.map((current) => {
			return resource.id === current.id ? resource : current;
		});

		this.inform();
	}

	removeResource(resource) {
		this.resources = this.resources.filter((current) => {
			return resource.id !== current.id;
		});

		this.inform();
	}

	addResource(properties = {}) {
		this.service.create(Utils.extend({}, this.defaults(), properties));
  }

	// toggleAll(checked) {
	// 	var service = this.service;
	// 	this.resources.forEach(function(resource) {
	// 		service.update(resource.id, Utils.extend({}, resource, { complete: checked }));
	// 	});
  // }
  //
	// toggle(resourceToToggle) {
	// 	var resource = Utils.extend({}, resourceToToggle, {complete: !resourceToToggle.complete });
	// 	this.service.update(resource.id, resource);
  // }

	destroy(resource) {
		this.service.remove(resource.id);
  }

	save(resource, properties) {
		this.service.update(resource.id, Utils.extend({}, resource, properties));
  }

	// clearCompleted() {
	// 	var service = this.service;
	// 	this.resources.forEach((resource) => {
	// 		if(resource.complete) {
	// 			service.remove(resource.id);
	// 		}
	// 	});
  // }
}

export default BaseModel;
