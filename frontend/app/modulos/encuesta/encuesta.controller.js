(function() {  

  angular
    .module('app.encuesta')
    .controller('encuesta', encuesta);

  encuesta.$inject = ['$scope','encuestaService','$timeout'];

  function encuesta($scope,encuestaService,$timeout) {
    /***************************/
    /******** VARIABLES ********/
    /***************************/
    var vm = this;

    /***************************/
    /********* Strings *********/
    /***************************/

    /***************************/
    /********* OBJECTS *********/
    /***************************/
    vm.preguntas = {};

    /***************************/
    /********* Arrays **********/
    /***************************/

    /***************************/
    /******** FUNCTIONS ********/
    /***************************/
    vm.enviar = enviar;
    // vm.seleccionImage = seleccionImage;

    /***************************/
    /****** FUNCTIONALITY ******/
    /***************************/

    function enviar() {
      
      if (Object.keys(vm.preguntas).length == 5) 
        encuestaService.enviarEncuesta(vm.preguntas).then(success,error);
      else
         alerta("Contesta todas las preguntas");

        function success(data) {
          alerta(data);
          vm.preguntas = {};
          
           // console.log(data);
        } 

         function error(data) {
           console.log(data);
         }
    }

    // function seleccionImage(image) {
    //       if (image == 'bueno') {

    //       }
    //       else if(image == 'medio'){

    //       }
    //       else if(image == malo)
    //     }    

    function alerta(mensaje) {
      vm.mensaje = mensaje;
      $(".overlay").css("display","block");
       $timeout(function() {
         $(".overlay").css("display","none");
       },1500);
    }

    $("#pregunta1").click(function() {
      $(this).css({
        color: "#ff0404cf",
        height: "139px",
      });
    })
  }

})();