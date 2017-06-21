'use strict';

angular.module('myApp.fieldSchedule', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/field-schedule', {
            templateUrl: 'field-schedule/field-schedule.html',
            controller: 'FieldScheduleCtrl as vm'
        });
    }])
    .directive('fieldSchedule', fieldSchedule)
    .factory('FieldScheduleService', FieldScheduleService)
    .controller('FieldScheduleCtrl', FieldScheduleCtrl);

function FieldScheduleCtrl(FieldScheduleService) {
    var vm = this;
    vm.wobba = 'Wooba Lobba dub dub';
    var imagePath = 'https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067';
    vm.messages = [{
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }, {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }, {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }, {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }, {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }];
}

function FieldScheduleService($http) {
    return {
        getJson:getJson
    };

    function getJson() {
        return $http.get('localization/loc.json');
    }



}

function fieldSchedule() {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'field-schedule/field-schedule.tmpl.html',
        link: link};

    function link(scope, elem, attrs) {
        elem.bind('click', function() {
            //elem.css('color', 'black');
            scope.$apply(function() {
                console.log('Wubba!!');
            });
        });

    }
}