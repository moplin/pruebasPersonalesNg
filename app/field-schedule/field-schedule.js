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

function FieldScheduleCtrl(FieldScheduleService, $mdDialog) {
    var vm = this;
    vm.wobba = 'Wooba Lobba dub dub';
    var imagePath = 'https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067';
    var d = new Date();
    //var today = moment().format('dddd');

    vm.reserveData = {
        "field_id":"5946efd41d41c8a84b137def",
        "beginning_time":"18",
        "match_date":"2017-06-28",
        "private":true,
        "slot":"2"
    };

    vm.config = {
        "complex_opens": "",
        "complex_closes": "",
        "init": 0,
        "end": 0,
        "count":0,
        "dayName":"",
        "dayNumber":"",
        "day_pricing":{},
        "reservations":{}
    };

    vm.schedule = [];

    FieldScheduleService.getJson().then(function (data) {
        console.log('data.data',data.data.schedules[0]);
        var sch = data.data.schedules[0];
        vm.config.complex_opens = sch.sport_field.sport_complex.complex_opens;
        vm.config.complex_closes = sch.sport_field.sport_complex.complex_closes;
        var init = vm.config.complex_opens.split(':');
        var end = vm.config.complex_closes.split(':');
        vm.config.init = parseInt(init[0]);
        vm.config.end = parseInt(end[0]);
        vm.config.count = Math.abs(vm.config.init - vm.config.end);
        vm.config.day_pricing = sch.sport_field.day_pricing;
        //vm.config.reservations = sch.reservations;
        vm.config.dayName = getToday(d.getDay());
        vm.config.dayNumber = d.getDay();
        angular.forEach(sch.reservations, function(value, key) {
            vm.config.reservations[value.beginning_time] = value;
        });

    });

        vm.showDialog = function(id, ev) {
            console.log('id', id);
            $mdDialog.show({
                controller: DialogController,
                controllerAs: 'vm',
                templateUrl: 'field-schedule/dialog.tmlp.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: true // Only for -xs, -sm breakpoints.
            })
                .then(function(answer) {
                    console.log('answer',answer)
                }, function() {
                    $scope.status = '';
                    console.log('You cancelled the dialog.')
                });
        };

        function DialogController($scope, $mdDialog) {
            $scope.hide = function() {
                $mdDialog.hide();
            };
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }


    function getToday(dayIndx){
        var weekday = new Array(7);
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        return weekday[dayIndx];
    }
}

function FieldScheduleService($http) {
    return {
        getJson:getJson
    };

    function getJson() {
        ///v1/field_schedule/5946efd41d41c8a84b137def
        var url = 'http://192.168.159.129:3000';
        var uri = '/v1/field_schedule/5946efd41d41c8a84b137def';
        //return $http.get('field-schedule/sch.json');
        return $http.get(url+uri);
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
            scope.$apply(function() {
            });
        });
        scope.range = function (count) {
            var ratings = [];
            for (var i = 0; i < count; i++) {ratings.push(i)}
            return ratings;
        };
        scope.timeDataHeader = function (index, rsvs) {
            var resp = '';
            if( typeof rsvs[index] !== 'undefined'){
                resp = 'Reservado a: ' +
                    rsvs[index].reservation_owner.name +
                    ' Email: ' + rsvs[index].reservation_owner.email +
                    ' (' +
                    //' Activa: ' + ((rsvs[index].active)?'SI':'NO') +
                    //' Cancelada: ' + ((rsvs[index].canceled)?'SI':'NO') +
                    ' ' + ((rsvs[index].private)?'PRIVADA':'PUBLICA') +
                    ')';
            }else {
                resp = 'LIBRE'
            }
            return resp;
        };
        scope.isFree = function (index, rsvs) {
            return (typeof rsvs[index] === 'undefined');
        };
    }



}