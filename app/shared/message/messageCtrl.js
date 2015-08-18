angular.module('app.message').controller('MessagesCtrl', ['$scope', 'messageService', function($scope,messageService) {
  $scope.messages = messageService.messages;

  $scope.closeAllMessages = function(index) {
    if ($scope.messages.length > 0) {
      $scope.messages.length = 0;
    }
  };
  $scope.closeAllMessages();

  $scope.closeMessage = function(index) {
    $scope.messages.splice(index, 1);
  };
}]);