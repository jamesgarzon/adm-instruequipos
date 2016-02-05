'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'link': '/'
  },{
    'title': 'Productos',
    'link': '/productos'
  },{
    'title': 'Clientes',
    'link': '/clientes'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor($location) {
    this.$location = $location;
    }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('adminInstruequiposApp')
  .controller('NavbarController', NavbarController);
