'use strict';

/* Routes */

angular.module('kusaApp', ['transDirective', 'mainService', 'kusaFilters'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	  when('/hp', {templateUrl: '/js/angular/admin/tpl/hp.html',   controller: HpCtrl}).
  	  when('/translate', {templateUrl: '/js/angular/admin/tpl/translate.html',   controller: TranslateCtrl}).
  	  when('/navigation', {templateUrl: '/js/angular/admin/tpl/navigation.html',   controller: NavigationCtrl}).
  	  when('/product', {templateUrl: '/js/angular/admin/tpl/product.html',   controller: ProductCtrl}).
  	  when('/brand', {templateUrl: '/js/angular/admin/tpl/brand.html',   controller: BrandCtrl}).
  	  when('/logs', {templateUrl: '/js/angular/admin/tpl/logs.html',   controller: LogsCtrl}).
  	  when('/cache', {templateUrl: '/js/angular/admin/tpl/cache.html',   controller: CacheCtrl}).
  	  when('/settings', {templateUrl: '/js/angular/admin/tpl/settings.html',   controller: SettingsCtrl}).
  	  when('/section', {templateUrl: '/js/angular/admin/tpl/section.html',   controller: SectionCtrl}).
      when('/', {templateUrl: '/js/angular/admin/tpl/login.html',   controller: LoginCtrl}).
      otherwise({redirectTo: '/'});
}])