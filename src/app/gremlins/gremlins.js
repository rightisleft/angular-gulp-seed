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
