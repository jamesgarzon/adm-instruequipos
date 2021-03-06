'use strict';

  $(document).ready(function() {
      // $('select').material_select();
      // $('input, textarea').characterCounter();
      // $('.modal-trigger').leanModal();
      // $('.collapsible').collapsible();
  });
      // $('.button-collapse').sideNav();

(function() {

class MainController {



  constructor($http) {
    this.$http = $http;
    this.awesomeThings = [];

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('adminInstruequiposApp')
  .controller('MainController', MainController);

})();
