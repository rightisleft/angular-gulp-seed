angular.module('app', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'ngDragDrop',
    'ui.router',
    'ui.bootstrap',
    ])
.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/home');
    //
    // Now set up the states
    $stateProvider
        .state('app', {
            url: '',
            abstract: true,
            template: '<ui-view/>'
        });
});
angular.module('app').controller('HomeController', function($scope) {
    console.log('HomeController');
});

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                parent: 'app',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('home.index', {
                url: '',
                templateUrl: 'home/home.html',
                controller: 'HomeController'
            });
    });

angular.module('app').controller('GremlinController', function ($http, $scope) {
    console.log('GremlinController');
});
angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('gremlin', {
                url: '/gremlin',
                parent: 'app',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('gremlin.list', {
                url: '',
                templateUrl: 'gremlins/gremlins.html',
                controller: 'GremlinController'
            });
    });
