'use strict';

//define the 'app' module
var app = angular.module("app", []);

app.controller("appController", ['$scope',
    function ($scope) {
        $scope.hello = 'Hello World Martin';
    }
]);
