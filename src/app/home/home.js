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
