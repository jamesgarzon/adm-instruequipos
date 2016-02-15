'use strict';

angular.module('adminInstruequiposApp')
  .controller('ProductosCtrl', function ($scope,$location,Producto,Marca) {

    $(document).ready(function() {
        // $('select').material_select();
        $('input, textarea').characterCounter();
        $('.modal-trigger').leanModal();
        // $('.button-collapse').sideNav();
        $('.collapsible').collapsible();
    });



    $scope.vista = 'listarProductos';
    $scope.vistaProducto = 'ver';

    $scope.listarProductos = function () {
    Producto.listar()
        .then(function(data) {
            $scope.productos = data;
        })
        .catch(function(err) {
          console.log(err);
      });

    }

    $scope.listarProductos();

      Marca.listar()
          .then(function(data) {
              $scope.marcas = data;
          })
          .catch(function(err) {
            console.log(err);
        });

      $scope.seleccionarProducto = function (producto) {

        // Pagina usada para reportes http://pdfmake.org/#/gettingstarted
      // http://localhost:9000/productos

      // playground requires you to assign document definition to a variable called dd

      // var docDefinition = {
      //    header: 'simple Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      // 	content: [
      // 		{
      // 			stack: [
      // 				'This header has both top and bottom margins defined',
      // 				{ text: 'This is a subheader', style: 'subheader' },
      // 			],
      // 			style: 'header'
      // 		},
      // 		{
      // 			text: [
      // 				'Margins have slightly different behavior than other layout properties. They are not inherited, unlike anything else. They\'re applied only to those nodes which explicitly ',
      // 				'set margin or style property.\n',
      // 			]
      // 		},
      // 		{
      // 			text: 'This paragraph (consisting of a single line) directly sets top and bottom margin to 20',
      // 			margin: [0, 20],
      // 		},
      // 		{
      // 			stack: [
      // 				{ text: [
      // 						'This line begins a stack of paragraphs. The whole stack uses a ',
      // 						{ text: 'superMargin', italics: true },
      // 						' style (with margin and fontSize properties).',
      // 						]
      // 				},
      // 				{ text: ['When you look at the', { text: ' document definition', italics: true }, ', you will notice that fontSize is inherited by all paragraphs inside the stack.' ]},
      // 				'Margin however is only applied once (to the whole stack).'
      // 			],
      // 			style: 'superMargin'
      // 		},
      // 		{
      // 			stack: [
      // 				'I\'m not sure yet if this is the desired behavior. I find it a better approach however. One thing to be considered in the future is an explicit layout property called inheritMargin which could opt-in the inheritance.\n\n',
      // 				{
      // 					fontSize: 15,
      // 					text: [
      // 						'Currently margins for ',
      // 						/* the following margin definition doesn't change anything */
      // 						{ text: 'inlines', margin: 20 },
      // 						' are ignored\n\n'
      // 					],
      // 				},
      // 				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
      // 				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
      // 				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
      // 				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
      // 				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
      // 				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
      // 				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
      // 				],
      // 			margin: [0, 20, 0, 0],
      // 			alignment: 'justify'
      // 		}
      // 	],
      // 	styles: {
      // 		header: {
      // 			fontSize: 18,
      // 			bold: true,
      // 			alignment: 'right',
      // 			margin: [0,190,0,80]
      // 		},
      // 		subheader: {
      // 			fontSize: 14
      // 		},
      // 		superMargin: {
      // 			margin: [20, 0, 40, 0],
      // 			fontSize: 15,
      // 		}
      // 	}
      // }

        // print the PDF (temporarily Chrome-only)
        // pdfMake.createPdf(docDefinition).print();
        $location.path('/productos/'+producto.codigo);
      };
      $scope.cambiarVista = function (nuevaVista) {
        $scope.vista = nuevaVista;
      }

      $scope.myValidator = function(newValue) {
        console.log(newValue);
        return true;
      };

      $scope.crearProducto = function (nuevoProducto) {
        nuevoProducto.stock=0;
        Producto.crear(nuevoProducto)
        .then(function(data){
           $('#modal-product-form').closeModal();
           $scope.listarProductos();
           Materialize.toast('Producto creado exitosamente', 4000) // 4000 is the duration of the toast
        })
        .catch(function(err){
          if (err.code==11000) {
            Materialize.toast('El ya existe un producto con ese código, por favor intente con otro', 4000) // 4000 is the duration of the toast

          }
        })
      }






  });
