angular.module('app.serviceInstance').controller('ServiceInstanceDeleteCtrl', ['$scope', '$modalInstance', '$log', 'serviceInstance', 'serviceInstanceService', 'messageService', function($scope, $modalInstance, $log, serviceInstance, serviceInstanceService, messageService) {

  $scope.serviceInstance = serviceInstance;

  $scope.ok = function () {
    serviceInstanceService.deleteServiceInstance($scope.serviceInstance.id).then(function(response) {
      messageService.addMessage('success', 'The service instance has been successfully deleted.');

      $modalInstance.close($scope.serviceInstance);
    }, function(err) {
      messageService.addMessage('danger', 'The service instance has not been deleted.');
      $log.error(err);

      $modalInstance.dismiss('cancel');
    });
  };
  
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);