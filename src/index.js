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