'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl as vm'
  });
}])

    .controller('View1Ctrl', ['$http', 'lodash',function($http, lodash) {
        var vm = this;
        vm.days = ['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
        vm.pricingObj = {
            aa:{val:'aa',price:10,color:'#b8d4e2'},
            aaa:{val:'aaa',price:20,color:'#088da5'},
            aawe:{val:'aawe',price:30,color:'#ded5f9'}, //week end
            aaawe:{val:'aaawe',price:40,color:'#776a87'}, //week end
            na:{val:'na',price:0,color:'#a7b2ba'}
        };
        vm.data = {};
        $http.get('data.json?id=2342')
        .then(function(res){
            vm.data = res.data;
        });

        ///FUNCTION
        vm.changePrice = function (indx1, indx2) {
            var value = vm.data.day_pricing[indx1].time_pricing[indx2].value;
            switch (value){
                case 'aa':
                    console.log(value);
                    vm.data.day_pricing[indx1].time_pricing[indx2].price = vm.pricingObj.aa.price;
                    break;
                case 'aaa':
                    console.log(value);
                    vm.data.day_pricing[indx1].time_pricing[indx2].price = vm.pricingObj.aaa.price;
                    break;
                case 'aawe':
                    console.log(value);
                    vm.data.day_pricing[indx1].time_pricing[indx2].price = vm.pricingObj.aawe.price;
                    break;
                case 'aaawe':
                    console.log(value);
                    vm.data.day_pricing[indx1].time_pricing[indx2].price = vm.pricingObj.aaawe.price;
                    break;
                default:
                    console.log(value);
                    vm.data.day_pricing[indx1].time_pricing[indx2].price = 0;
            }
            return true;
        }




    }])

    .directive('gtPriceSelector', function(lodash) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'view1/priceselector.html',
            link: link};

        // Functions
        function link(scope, elem, attrs) {
            elem.bind('click', function() {
                //elem.css('color', 'black');
                scope.$apply(function() {
                    //scope.color = "black";
                });
            });
            elem.bind('mouseover', function() {
                //elem.css('cursor', 'pointer');
            });

            scope.somefunction = function(a) {
                console.log('wobba dubba');
            };

            scope.selectClass = function (id) {
                return id;
            };
            scope.cpyWeek = function (indx) {
                var cpval = scope.vm.data.day_pricing[0].time_pricing[indx].value;
                scope.vm.data.day_pricing[1].time_pricing[indx].value = cpval;
                scope.vm.changePrice(1,indx);
                scope.vm.data.day_pricing[2].time_pricing[indx].value = cpval;
                scope.vm.changePrice(2,indx);
                scope.vm.data.day_pricing[3].time_pricing[indx].value = cpval;
                scope.vm.changePrice(3,indx);
                scope.vm.data.day_pricing[4].time_pricing[indx].value = cpval;
                scope.vm.changePrice(4,indx);
                scope.vm.data.day_pricing[5].time_pricing[indx].value = (cpval!=='na')?cpval+'we':cpval;
                scope.vm.changePrice(5,indx);
                scope.vm.data.day_pricing[6].time_pricing[indx].value = (cpval!=='na')?cpval+'we':cpval;
                scope.vm.changePrice(6,indx);
                return true;
            };
        }



    });

angular.module('myApp.view1')
    .filter('range', function(){
        return function(n) {
            var res = [];
            for (var i = 0; i < n; i++) {
                res.push(i);
            }
            return res;
        };
    });