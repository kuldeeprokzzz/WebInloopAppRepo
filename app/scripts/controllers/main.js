'use strict';

/**
 * @ngdoc function
 * @name inloopAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inloopAppApp
 */
angular.module('inloopAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
