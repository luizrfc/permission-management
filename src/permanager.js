/**
 * Permission based routing for Angular JS
 * @version v0.0.0 - 2014-05-11 * @link https://github.com/mohammadumairkhan/permission-management
 * @author Mohammad Umair Khan <mohammad.umair.k@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

var app = angular.module('permanager', []);

app.provider('PermissionManager', [function () {
	var configurer = {};
	var globalConfig = {};

	configurer.initialize = function(self, configurations){

		self.setIgnoreRoutes = function(ignoreRoutes){
			//will contain routes which need to be ignored for checking permissions
		}

		self.setShouldRouteToDefault = function(shouldRoute){
			//will set variable to allow redirection to default route
		}

		self.setDefaultRoute = function(defaultRoute){
			//will default to this route if a permission fails
		}

		self.useUIRouter = function(usingUIRouter){
			//will set variable to use UI router states for all operations
		}

		self.setPermissionDeniedEvent = function(permissionDeniedEvent){
			//will set the permission denied event to be broadcasted on the $rootScope
		}
	}

	configurer.initialize(this, globalConfig);
	/**
		1. configure ignore routes
		2. prevent to routes
		3. prevent from routes
	**/	

	this.$get = ['$rootScope',function($rootScope) {

		return {
			//will return a function to start the service which will watch
			//and allow disallow route changes
		};
	}];
}])