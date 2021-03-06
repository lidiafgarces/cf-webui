angular.module('app.application').controller('ApplicationDeleteCtrl', ['$scope', '$modalInstance', '$log', 'application', 'applicationService', 'messageService', function($scope, $modalInstance, $log, application, applicationService, messageService) {

  $scope.application = application;

  $scope.ok = function () {
    applicationService.deleteApplication($scope.application).then(function(response) {
      messageService.addMessage('success', 'The application has been successfully deleted.');
    }, function(err) {
      messageService.addMessage('danger', 'The application has not been deleted.');
      $log.error(err);
    });

    $modalInstance.close($scope.application);
  };
  
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);