angular.module('app', [])
    .controller('TestController', function($scope) {
        console.log('TestController');
    });

angular.module('app').controller('HomeController', function($scope) {
    console.log('HomeController');
});

console.log('home');
console.log('Main.js');
