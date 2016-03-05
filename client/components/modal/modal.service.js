'use strict';

angular.module('adminInstruequiposApp')
  .factory('Modal', function ($rootScope, $modal) {
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

        /**
         * Create a function to open a delete confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
         * @param  {Function} del - callback, ran when delete is confirmed
         * @return {Function}     - the function to open the modal (ex. myModalFn)
         */
        delete(del = angular.noop) {
          /**
           * Open a delete confirmation modal
           * @param  {String} name   - name or info to show on modal
           * @param  {All}           - any additional args are passed straight to del callback
           */
          return function() {
            var args = Array.prototype.slice.call(arguments),
                name = args.shift(),
                deleteModal;

            deleteModal = openModal({
              modal: {
                dismissable: true,
                title: 'Confirmación de eliminación',
                html: '<p>¿Esta seguro que desea eliminar <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-danger',
                  text: 'Eliminar',
                  click: function(e) {
                    deleteModal.close(e);
                  }
                }, {
                  classes: 'btn-default',
                  text: 'Cancelar',
                  click: function(e) {
                    deleteModal.dismiss(e);
                  }
                }]
              }
            }, 'modal-danger');

            deleteModal.result.then(function(event) {
              del.apply(event, args);
            });
          };
        },

        create(cre = angular.noop) {
          /**
           * Open a create confirmation modal
           * @param  {String} name   - name or info to show on modal
           * @param  {All}           - any additional args are passed straight to del callback
           */
          return function() {
            var args = Array.prototype.slice.call(arguments),
                name = args.shift(),
                createModal;

            createModal = openModal({
              modal: {
                dismissable: true,
                title: 'Confirmación de creación',
                html: '<p>¿Esta seguro que desea crear <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-primary',
                  text: 'Crear',
                  click: function(e) {
                    createModal.close(e);
                  }
                }, {
                  classes: 'btn-default',
                  text: 'Cancelar',
                  click: function(e) {
                    createModal.dismiss(e);
                  }
                }]
              }
            }, 'modal-primary');

            createModal.result.then(function(event) {
              cre.apply(event, args);
            });
          };
        },
        //


        update(upd = angular.noop) {
          /**
           * Open a create confirmation modal
           * @param  {String} name   - name or info to show on modal
           * @param  {All}           - any additional args are passed straight to del callback
           */
          return function() {
            var args = Array.prototype.slice.call(arguments),
                name = args.shift(),
                updateModal;

            updateModal = openModal({
              modal: {
                dismissable: true,
                title: 'Confirmación de actualización',
                html: '<p>Are you sure you want to create <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-primary',
                  text: 'Delete',
                  click: function(e) {
                    updateModal.close(e);
                  }
                }, {
                  classes: 'btn-default',
                  text: 'Cancel',
                  click: function(e) {
                    updateModal.dismiss(e);
                  }
                }]
              }
            }, 'modal-primary');

            updateModal.result.then(function(event) {
              upd.apply(event, args);
            });
          };
        }
      },

      //**********


        /* Modales de información */
        info: {

          /**
           * Create a function to open a delete confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
           * @param  {Function} del - callback, ran when delete is confirmed
           * @return {Function}     - the function to open the modal (ex. myModalFn)
           */
          delete:function() {
              var args = Array.prototype.slice.call(arguments),
                  name = args.shift(),
                  deleteModal;

              deleteModal = openModal({
                modal: {
                  dismissable: true,
                  title: 'Eliminado',
                  html: '<p>Se ha eliminado exitosamente '+name+'</p>',
                  buttons: [{
                    classes: 'btn-default',
                    text: 'Aceptar',
                    click: function(e) {
                      deleteModal.dismiss(e);
                    }
                  }]
                }
              }, 'modal-success');

              // deleteModal.result.then(function(event) {
              //   del.apply(event, args);
              // });
            },


            /**
             * Create a function to open a delete confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
             * @param  {Function} del - callback, ran when delete is confirmed
             * @return {Function}     - the function to open the modal (ex. myModalFn)
             */
            create:function() {
                var args = Array.prototype.slice.call(arguments),
                    name = args.shift(),
                    deleteModal;

                deleteModal = openModal({
                  modal: {
                    dismissable: true,
                    title: 'Creado',
                    html: '<p>Se ha creado exitosamente '+name+'</p>',
                    buttons: [{
                      classes: 'btn-default',
                      text: 'Aceptar',
                      click: function(e) {
                        deleteModal.dismiss(e);
                      }
                    }]
                  }
                }, 'modal-success');
              },


              /**
               * Create a function to open a delete confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
               * @param  {Function} del - callback, ran when delete is confirmed
               * @return {Function}     - the function to open the modal (ex. myModalFn)
               */
              update:function() {
                  var args = Array.prototype.slice.call(arguments),
                      name = args.shift(),
                      deleteModal;

                  deleteModal = openModal({
                    modal: {
                      dismissable: true,
                      title: 'Actualizado',
                      html: '<p>Se ha actualizado exitosamente '+name+'</p>',
                      buttons: [{
                        classes: 'btn-default',
                        text: 'Aceptar',
                        click: function(e) {
                          deleteModal.dismiss(e);
                        }
                      }]
                    }
                  }, 'modal-success');
                },


              /**
               * Create a function to open a delete confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
               * @param  {Function} del - callback, ran when delete is confirmed
               * @return {Function}     - the function to open the modal (ex. myModalFn)
               */
              default:function(titulo, contenido) {
                  // var args = Array.prototype.slice.call(arguments),
                      // name = args.shift(),
                      var deleteModal;

                  deleteModal = openModal({
                    modal: {
                      dismissable: true,
                      title: titulo,
                      html: '<p>'+contenido+'</p>',
                      buttons: [{
                        classes: 'btn-default',
                        text: 'Aceptar',
                        click: function(e) {
                          deleteModal.dismiss(e);
                        }
                      }]
                    }
                  }, 'modal-info');
                }


        }

    };
  });
