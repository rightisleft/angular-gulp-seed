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
    //
    // For any unmatched url, redirect to /state1
    console.log('config');
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
        .state('app', {
            url: '',
            abstract: true,
            template: '<ui-view/>'
        });
});