'use strict';

angular.module('myApp.localization', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/localization', {
            templateUrl: 'localization/localization.html',
            controller: 'LocalizationCtrl as vm'
        });
    }])
    .factory('LocalizationService', LocalizationService)
    .controller('LocalizationCtrl', LocalizationCtrl);

    function LocalizationCtrl(LocalizationService) {
        var vm = this;
        vm.loc = {};
        vm.cleanLoc = {};
        vm.my_localization = '-0.189069, -78.502880';
        vm.wobba = 'dub';
        vm.wobba2 = {};

        LocalizationService.getLocalization().then(function (dta) {
            vm.loc = dta.data;
            var keys = Object.keys(vm.loc);
            console.log('dta.data',keys.length);
            angular.forEach(vm.loc, function(value, key) {
                var dst = LocalizationService.getLocalizationFiltered(value, vm.my_localization);
                value['dist']=dst;
                if (typeof vm.my_localization.alt === 'undefined'){
                    value['alt']=0;
                }
            });
            vm.loc = LocalizationService.getCleanByDistance(vm.loc, 3.0);
            var keys2 = Object.keys(vm.loc);
            console.log('dta.data',keys2.length);
            console.log('vm.loc',vm.loc);
        });

        vm.products = [];
        var prodsArr = [];
        vm.city = 'Zona Sur: Cuenca y otros';
        LocalizationService.getProds().then(function (dta) {
            vm.products = dta.data;
            var keys = Object.keys(vm.products);
            angular.forEach(vm.products, function(value, key) {
                if( value.city === vm.city ){
                    prodsArr.push(value)
                }
            });
            vm.products = prodsArr;
            var keysX = Object.keys(vm.products);
        });
    }
    
    function LocalizationService($http) {
        return {
            getLocalizationFiltered:getLocalizationFiltered,
            getLocalization:getLocalization,
            getCleanByDistance:getCleanByDistance,
            getProds:getProds
        };

        function getLocalization() {
            return $http.get('localization/loc.json');
        }


        function getProds() {
            return $http.get('localization/prods.json');
        }

        function getCleanByDistance(obj, dist) {
            var newObj = {};
            angular.forEach(obj, function(value, key){
                if(parseFloat(value.dist) < parseFloat(dist)){
                    //console.count();
                    //console.log(value);
                    newObj[key] = value;
                }
            }); //153
            return newObj;
        }

        function getLocalizationFiltered (fu, loc) {

            var locAArr = fu.latlong.split(',');
            var locBArr = loc.split(',');

            return calcCrow(
                parseFloat(locAArr[0]),
                parseFloat(locAArr[1]),
                parseFloat(locBArr[0]),
                parseFloat(locBArr[1]))
        }

        function calcCrow(lat1a, lon1a, lat2a, lon2a) {
            var R = 6371; // km
            var dLat = toRad(lat2a-lat1a);
            var dLon = toRad(lon2a-lon1a);
            var lat1 = toRad(lat1a);
            var lat2 = toRad(lat2a);
            var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c;
            return d;
        }

        function toRad(Value) {
            return Value * Math.PI / 180;
        }
    }