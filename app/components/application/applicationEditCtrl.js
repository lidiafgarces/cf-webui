angular.module('app.application').controller('ApplicationEditCtrl', ['$scope', '$modalInstance', '$log', 'application', 'applicationService', 'messageService', function($scope, $modalInstance, $log, application, applicationService, messageService) {

  $scope.application = application;

  $scope.ok = function () {
    applicationService.editApplication($scope.application).then(function(response) {
      messageService.addMessage('success', 'The application name has been successfully changed.');
    }, function(err) {
      messageService.addMessage('danger', 'The application name has not been changed.');
      $log.error(err);
    });

    $modalInstance.close($scope.application);
  };
  
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);