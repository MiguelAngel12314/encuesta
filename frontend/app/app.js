(function() {
  "use strict";

  angular.module('app', [
    //Módulos de ángular
    'ngRoute',

    //------Modulos------
    'app.encuesta',
  ])
  .constant("HOST", "http://192.168.0.9:3000/")
  .constant("TIMEOUT", 40500);

})();
