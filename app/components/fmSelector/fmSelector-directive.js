'use strict';

angular.module('myApp.fmSelector.fmSelector-directive', [])

.directive('fmSelector', ['fmSelector', function(data) {
  return function(scope, elm, attrs) {
    //elm.text(version);
      console.log('waxa');
  };
}]);
