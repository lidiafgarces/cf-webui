angular.module('app.auth').factory('authInterceptorService', ['$q', '$location', '$injector', '$rootScope', '$log', function($q, $location, $injector, $rootScope, $log) {
  var authInterceptorServiceFactory = {};

  var reload = 0;

  var _request = function(config) {
    $log.error('Llamada a request');
    config.headers = config.headers || {};

    var accessToken = sessionStorage.getItem('accessToken');
    var userName = sessionStorage.getItem('userName');
    if (config.headers.Authorization === undefined && accessToken !== null && userName !== null) {
      config.headers.Authorization = 'Bearer ' + accessToken;
      config.headers['X-Webui-Authorization'] = 'Bearer ' + accessToken;
    }

    return config;
  };

  var _responseError = function(rejection) {
    if ($rootScope.nrOfUnauthorizedRequests === 0 && rejection.status === 401) {
      var authService = $injector.get('authService');
      var $route = $injector.get('$route');
      var messageService = $injector.get('messageService');
      authService.refresh().then(function(response) {
        $route.reload();
      },
      function (err) {
        //messageService.addMessage('danger', err.error_description);
        $log.error(err);
        authService.logOut();
        $route.reload();
        reload = reload +1;
        $log.error(reload);
      });
    }

    $rootScope.nrOfUnauthorizedRequests++;
    return $q.reject(rejection);
  };

  authInterceptorServiceFactory.request = _request;
  authInterceptorServiceFactory.responseError = _responseError;

  return authInterceptorServiceFactory;
}]);