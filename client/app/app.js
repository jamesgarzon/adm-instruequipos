'use strict';

angular.module('adminInstruequiposApp', [
  'adminInstruequiposApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.materialize',
  'autocomplete'
  // 'ui.bootstrap',
  // 'angularInlineEdit'
  // ,  'angularUtils.directives.dirPagination'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

          $(document).ready(function() {
              $('.button-collapse').sideNav();
          });

  });
