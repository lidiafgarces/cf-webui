<!DOCTYPE html>
<html lang="en" ng-app="app">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Cloud Foundry Web User Interface</title>

  	<!-- Google Fonts -->
  	<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,700,400italic,700italic" rel="stylesheet">

    <!-- Bootstrap -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link href="assets/css/font-awesome.min.css" rel="stylesheet">

    <!-- Angular Loading Bar -->
    <link href="assets/css/loading-bar.min.css" rel="stylesheet">
    
    <!-- Theme -->
    <link href="assets/css/style.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div id="page">
      
      <ng-view></ng-view>
      
    </div><!-- /#page -->
    
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        
    <!-- AngularJS -->
    <script src="assets/libs/angular.min.js"></script>
    <script src="assets/libs/angular-route.min.js"></script>
    <script src="assets/libs/angular-resource.min.js"></script>
    <script src="assets/libs/angular-animate.min.js"></script>

    <!-- UI Bootstrap -->
    <script src="assets/libs/ui-bootstrap-tpls-0.11.2.min.js"></script>

    <!-- Angular Loading Bar -->
    <script src="assets/libs/loading-bar.min.js"></script>


    
    <!-- AngularJS app -->
    <script src="app/app.js"></script>
    <script src="app/app.constant.js"></script>
    <script src="app/app.config.js"></script>
    <script src="app/app.run.js"></script>



    <!-- sidebar shared component -->
    <script src="app/shared/sidebar/sidebar.js"></script>
    <script src="app/shared/sidebar/sidebarCtrl.js"></script>
    <script src="app/shared/sidebar/sidebarDirective.js"></script>
    <script src="app/shared/sidebar/sidebarToggleSidebarDirective.js"></script>
    <script src="app/shared/sidebar/sidebarToggleSubnaviDirective.js"></script>

    <!-- topbar shared component -->
    <script src="app/shared/topbar/topbar.js"></script>
    <script src="app/shared/topbar/topbarDirective.js"></script>

    <!-- breadcrumb shared component -->
    <script src="app/shared/breadcrumb/breadcrumb.js"></script>
    <script src="app/shared/breadcrumb/breadcrumbCtrl.js"></script>
    <script src="app/shared/breadcrumb/breadcrumbDirective.js"></script>

    <!-- message shared component -->
    <script src="app/shared/message/message.js"></script>
    <script src="app/shared/message/messageCtrl.js"></script>
    <script src="app/shared/message/messageDirective.js"></script>
    <script src="app/shared/message/messageService.js"></script>



    <!-- application component -->
    <script src="app/components/application/application.js"></script>
    <script src="app/components/application/applicationService.js"></script>
    <script src="app/components/application/applicationDetailsCtrl.js"></script>
    <script src="app/components/application/applicationEditCtrl.js"></script>
    <script src="app/components/application/applicationDeleteCtrl.js"></script>
    <script src="app/components/application/applicationUserEnvAddCtrl.js"></script>
    <script src="app/components/application/applicationUserEnvEditCtrl.js"></script>
    <script src="app/components/application/applicationUserEnvDeleteCtrl.js"></script>
    <script src="app/components/application/applicationScaleCtrl.js"></script>
    
    <!-- auth component -->
    <script src="app/components/authentication/auth.js"></script>
    <script src="app/components/authentication/authService.js"></script>
    <script src="app/components/authentication/authInterceptorService.js"></script>

    <!-- logIn component -->
    <script src="app/components/logIn/logIn.js"></script>
    <script src="app/components/logIn/logInCtrl.js"></script>

    <!-- organization component -->
    <script src="app/components/organization/organization.js"></script>
    <script src="app/components/organization/organizationPreviewCtrl.js"></script>
    <script src="app/components/organization/organizationDetailsCtrl.js"></script>
    <script src="app/components/organization/organizationAddCtrl.js"></script>
    <script src="app/components/organization/organizationEditCtrl.js"></script>
    <script src="app/components/organization/organizationDeleteCtrl.js"></script>
    <script src="app/components/organization/organizationService.js"></script>

    <!-- space component -->
    <script src="app/components/space/space.js"></script>
    <script src="app/components/space/spaceDetailsCtrl.js"></script>
    <script src="app/components/space/spaceAddCtrl.js"></script>
    <script src="app/components/space/spaceAddServiceCtrl.js"></script>
    <script src="app/components/space/spaceEditCtrl.js"></script>
    <script src="app/components/space/spaceService.js"></script>
    <script src="app/components/space/spaceDeleteCtrl.js"></script>

    <!-- service component -->
    <script src="app/components/service/service.js"></script>
    <script src="app/components/service/serviceService.js"></script>

    <!-- service instance component -->
    <script src="app/components/serviceInstance/serviceInstance.js"></script>
    <script src="app/components/serviceInstance/serviceInstanceDeleteCtrl.js"></script>
    <script src="app/components/serviceInstance/serviceInstanceService.js"></script>
    
    <!-- domain component -->
    <script src="app/components/domain/domain.js"></script>
    <script src="app/components/domain/domainService.js"></script>
    <script src="app/components/domain/domainAddCtrl.js"></script>
    <script src="app/components/domain/domainDeleteCtrl.js"></script>
    
    <!-- route component -->
    <script src="app/components/route/route.js"></script>
    <script src="app/components/route/routeMapCtrl.js"></script>
    <script src="app/components/route/routeUnmapCtrl.js"></script>
    <script src="app/components/route/routeService.js"></script>
    
    <!-- user component -->
    <script src="app/components/user/user.js"></script>
    <script src="app/components/user/userService.js"></script>
    <script src="app/components/user/userDeleteCtrl.js"></script>
    
    <!-- service binding component -->
    <script src="app/components/serviceBinding/serviceBinding.js"></script>
    <script src="app/components/serviceBinding/serviceBindingAddCtrl.js"></script>
    <script src="app/components/serviceBinding/serviceBindingDeleteCtrl.js"></script>
    <script src="app/components/serviceBinding/serviceBindingService.js"></script>

    <!-- marketplace component -->
    <script src="app/components/marketplace/marketplace.js"></script>
    <script src="app/components/marketplace/marketplaceAddServiceCtrl.js"></script>
    <script src="app/components/marketplace/marketplaceService.js"></script>
  </body>
</html>