(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope) {
    $scope.dishes="";
    $scope.message="";


    $scope.checkDishes = function (){
      if(checkEmpty($scope.dishes)){
        $scope.message="Please enter data first.";
      }else{
        var splits=splitString($scope.dishes,',');
        $scope.message=menuCount(splits);
      }

    };

    function checkEmpty(input){
      if(input == ''){
        return true;
      }else{
        return false;
      }

    }
    function splitString(stringToSplit, separator) {
      var re = /\s*,\s*/;
      var arrayOfStrings = stringToSplit.split(re);

    console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings);
      return  arrayOfStrings.length;
    }

    function menuCount(count){
      if (!(count <= 3)){
        return "Too much!";
      }
      else{
        return "Enjoy!!";

        }
      }

    }


  })();
