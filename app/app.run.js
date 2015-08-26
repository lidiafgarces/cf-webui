angular.module('app').run(['$rootScope', '$location', '$route', '$log', 'authService', function($rootScope, $location, $route, $log, authService) {
  $rootScope.nrOfUnauthorizedRequests = 0;
  $rootScope.rootFields = {};

  authService.fillAuthData();

  // redirect the user to the login page if he is not logged in
  $rootScope.$on('$routeChangeStart', function(event) {
    $rootScope.nrOfUnauthorizedRequests = 0;
    var authentication = authService.authentication;
    
    if (!authentication.isAuth && $location.path() != '/login') {
      $location.path('/login');
      $route.reload();
    }
  });
  
  $rootScope.$on('cfpLoadingBar:started', function (event) {
    $rootScope.rootFields.showContent = false;
    $log.error('Barra de carga iniciada');
    $log.error($rootScope.rootFields.showContent);
  });

  $rootScope.$on('cfpLoadingBar:loading', function (event) {
    $rootScope.rootFields.showContent = false;
    $log.error('Cargando...');
    $log.error($rootScope.rootFields.showContent);
  });
  
  $rootScope.$on('cfpLoadingBar:completed', function (event) {
    $rootScope.rootFields.showContent = true;
    $log.error('Barra de carga completa');
    $log.error($rootScope.rootFields.showContent);
  });
}]);