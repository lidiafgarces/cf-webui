angular.module('app.marketplace').controller('marketplaceAddServiceCtrl', ['$rootScope', '$scope', '$routeParams', '$location', '$log', 'serviceService','organizationService', 'spaceService', 'serviceInstanceService', 'messageService', function($rootScope, $scope, $routeParams, $location, $log, serviceService, organizationService, spaceService, serviceInstanceService, messageService) {
  $rootScope.rootFields.showContent = false;

  $scope.organizationId = $routeParams.organizationId;
  $scope.spaceId = $routeParams.spaceId;
  $scope.services = [];
  $scope.selectedService = null;
  $scope.organizations = [];
  //$scope.selectedOrganizationId = null;
  $scope.spaces = [];

  //$scope.spaceName = null;

  $scope.hideSelectService = false;
  $scope.hideSelectServicePlan = true;
  $scope.hideAddServiceInstance = true;
  $scope.showSelectOrganization = false;
  $scope.showSelectSpace = false;

  var getServicesPromise = null;

  $scope.getOrganizations = function() {
    organizationService.getOrganizations().then(function(response) {
      var data = response.data;
      //$scope.nrOfOrganizations = data.total_results;

      // create organization objects
      angular.forEach(data.resources, function(organization, i) {
        
        var objectOrganization = {
          id: organization.metadata.guid,
          name: organization.entity.name,
        };

        $scope.organizations.push(objectOrganization);
      });
    }, function (err) {
      messageService.addMessage('danger', 'The organizations have not been loaded.');
      $log.error(err);
    });
  };


  if ($scope.organizationId!=undefined){
    getServicesPromise = spaceService.getServicesForTheSpace($scope.spaceId);
    //$scope.hideSelectOrganization = true;
  } else{
    getServicesPromise = serviceService.getServices();
    $scope.getOrganizations();
    $scope.showSelectOrganization = true;
    $log.error($scope.spaceId);
  }

  getServicesPromise.then(function(response) {

    angular.forEach(response.data.resources, function(service, i) {
      var extraData = JSON.parse(service.entity.extra);

      var objectService = {
        id: service.metadata.guid,
        name: (extraData.displayName) ? extraData.displayName : service.entity.label,
        description: service.entity.description,
        longDescription: (extraData.longDescription) ? extraData.longDescription : service.entity.long_description,
        provider: (extraData.providerDisplayName) ? extraData.providerDisplayName : service.entity.provider,
        imageUrl: (extraData.imageUrl) ? extraData.imageUrl : null,
        documentationUrl: (extraData.documentationUrl) ? extraData.documentationUrl : service.entity.documentation_url,
        supportUrl: (extraData.supportUrl) ? extraData.supportUrl : null
      };

      $scope.services.push(objectService);
    });

  }, function(err) {
    messageService.addMessage('danger', 'The marketplace services have not been loaded.');
    $log.error(err);
  });

  $scope.selectSpace = function() {
    // clear spaces array on reload
    if ($scope.spaces.length > 0) {
      $scope.spaces.length = 0;
    }

    organizationService.getSpacesForTheOrganization($scope.organizationId, true).then(function(response) {
      //$log.error(config.ignoreLoadingBar);
      $log.error($scope.organizationId);

      var data = response.data;

      // get summary for each space
      angular.forEach(data.resources, function(space, key) {
        spaceService.getSpaceSummary(space.metadata.guid, true).then(function(responseSpace) {
          var dataSpace = responseSpace.data;

          var objectSpace = {
            id: dataSpace.guid,
            name: dataSpace.name,
          };

          $scope.spaces.push(objectSpace);

          
        }, function(err) {
          $log.error(err);
        });
      });
      $scope.showSelectSpace = true;

    }, function(err) {
      messageService.addMessage('danger', 'The spaces have not been loaded.');
      $log.error(err);
    });
    $log.error('La ID del espacio es:');
    $log.error($scope.spaceId);
  };

  $scope.selectService = function(selectedService) {
    $scope.selectedService = selectedService;
    $scope.servicePlans = [];

    var getServicePlansForTheServicePromise = serviceService.getServicePlansForTheService(selectedService.id);
    getServicePlansForTheServicePromise.then(function(response) {

      angular.forEach(response.data.resources, function(servicePlan, i) {
        var extraData = JSON.parse(servicePlan.entity.extra);

        // get costs
        var costs = null;
        if (extraData.costs) {
          var unit = extraData.costs[0].unit.replace('LY', '');

          var currency = null;
          var amount = null;
          for (i in extraData.costs[0].amount) {
            currency = i;
            amount = extraData.costs[0].amount[i];
            continue;
          }

          if (currency !== null && amount !== null) {
            costs = currency.toUpperCase() + ' ' + amount + '/' + unit;
          }
        }

        var objectServicePlan = {
          id: servicePlan.metadata.guid,
          name: (extraData.displayName) ? extraData.displayName : servicePlan.entity.name,
          description: servicePlan.entity.description,
          bullets: (extraData.bullets) ? extraData.bullets : null,
          costs: (servicePlan.entity.free) ? 'free' : costs
        };

        $scope.servicePlans.push(objectServicePlan);
      });

      $scope.hideSelectService = true;
      $scope.hideSelectServicePlan = false;
      $scope.hideAddServiceInstance = true;

    }, function(err) {
      messageService.addMessage('danger', 'The service plans have not been loaded.');
      $log.error(err);
    });
  };

  $scope.selectServicePlan = function(selectedServicePlan) {
    $scope.selectedServicePlan = selectedServicePlan;

    $scope.hideSelectService = true;
    $scope.hideSelectServicePlan = true;
    $scope.hideAddServiceInstance = false;
  };


  $scope.addServiceInstance = function() {
    $log.error('La ID del espacio al añadir es:');
    $log.error($scope.spaceId);
    var serviceInstance = {
      name: $scope.instanceName,
      spaceId: $scope.spaceId,
      servicePlanId: $scope.selectedServicePlan.id
    };

    serviceInstanceService.addServiceInstance(serviceInstance).then(function(response) {

      if (response.data.error_code) {
        messageService.addMessage('danger', response.data.description);
        $log.error(response);
      } else {
        messageService.addMessage('success', 'The service instance has been successfully added.');
        $log.error('exito');
      }
      
    }, function(err) {
      messageService.addMessage('danger', 'The service instance has not been added: ' + err.data.description);
      $log.error(err);
    });
    
    $location.path('/organizations/' + $scope.organizationId + '/spaces/' + $scope.spaceId);

  };



}]);