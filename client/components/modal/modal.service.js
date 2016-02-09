'use strict';

angular.module('adminInstruequiposApp')
  .factory('Modal', function($rootScope, $modal) {
    /**
     * Opens a modal
     * @param  {Object} scope      - an object to be merged with modal's scope
     * @param  {String} modalClass - (optional) class(es) to be applied to the modal
     * @return {Object}            - the instance $modal.open() returns
     */
    function openModal(scope = {}, modalClass = 'modal-default') {
      var modalScope = $rootScope.$new();

      angular.extend(modalScope, scope);

      return $modal.open({
        templateUrl: 'components/modal/modal.html',
        windowClass: modalClass,
        scope: modalScope
      });
    }

    // Public API here
    return {

      /* Confirmation modals */
      confirm: {

                 /************************************************************************************/
                /*********************  MODAL PARA CONFIRMAR ELIMINAR *******************************/
                /************************************************************************************/

        /**
         * Create a function to open a delete confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
         * @param  {Function} del - callback, ran when delete is confirmed
         * @return {Function}     - the function to open the modal (ex. myModalFn)
         */

        eliminar(del = angular.noop) {
          /**
           * Open a delete confirmation modal
           * @param  {String} name   - name or info to show on modal
           * @param  {All}           - any additional args are passed straight to del callback
           */
          return function() {
            var args = Array.prototype.slice.call(arguments),
                name = args.shift(),
                modalEliminar;

            modalEliminar = openModal({
              modal: {
                dismissable: true,
                title: 'Confirmar eliminación',
                html: '<p>¿Esta seguro que desea eliminar <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-danger',
                  text: 'Eliminar',
                  click: function(e) {
                    modalEliminar.close(e);
                  }
                }, {
                  classes: 'btn-default',
                  text: 'Cancelar',
                  click: function(e) {
                    modalEliminar.dismiss(e);
                  }
                }]
              }
            }, 'modal-danger');

            modalEliminar.result.then(function(event) {
              del.apply(event, args);
            });
          };
        },

        actualizar(upd = angular.noop) {
          /**
           * Open a delete confirmation modal
           * @param  {String} name   - name or info to show on modal
           * @param  {All}           - any additional args are passed straight to del callback
           */
          return function() {
            var args = Array.prototype.slice.call(arguments),
                name = args.shift(),
                modalActualizar;

            modalActualizar = openModal({
              modal: {
                dismissable: true,
                title: 'Confirmar Actualización',
                html: '<p>¿Esta seguro que desea actualizar <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-warning',
                  text: 'actualizar',
                  click: function(e) {
                    modalActualizar.close(e);
                  }
                }, {
                  classes: 'btn-default',
                  text: 'Cancelar',
                  click: function(e) {
                    modalActualizar.dismiss(e);
                  }
                }]
              }
            }, 'modal-warning');

            modalActualizar.result.then(function(event) {
              upd.apply(event, args);
            });
          };
        }

      }
    };
  });
