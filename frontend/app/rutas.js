  (function () {
  

  angular
    .module('app')
    .config(routeConfigurator);

  routeConfigurator.$inject = ['$routeProvider','$provide','$httpProvider'];

  function routeConfigurator($routeProvider,$provide, $httpProvider) {

    $routeProvider.
      when('/', {
        templateUrl: 'app/modulos/encuesta/encuesta.html',
        controller: 'encuesta as vm'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
///:search

})();
