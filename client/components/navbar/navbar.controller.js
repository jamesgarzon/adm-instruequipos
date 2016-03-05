'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'titulo': 'Home',
    'link': '/'
  },
{
  'titulo':'Estudiantes',
  'link':'/estudiantes'
},
{
  'titulo':'Desempeños',
  'link':'/desempenos'
},
{
  'titulo':'Asistencia',
  'link':'/asistencia'
},
{
  'titulo':'Grupos',
  'link':'/grupos'
},
{
  'titulo':'Asignaturas',
  'link':'/asignaturas'
}
];

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
