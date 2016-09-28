(function () {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var list1=this;

    list1.getShopList=ShoppingListCheckOffService.getShopList();

    list1.isEmpty=function(){
      return ShoppingListCheckOffService.emptyArray(list1.getShopList.length);
    }
    list1.checkedItem = function(index){
      ShoppingListCheckOffService.removeItem(index);
      }

    }

AlreadyBoughtController.$inject=['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2= this;

  list2.getItems= ShoppingListCheckOffService.getItems();

  list2.isEmpty=function(){
  return ShoppingListCheckOffService.emptyArray(list2.getItems.length);
  }

}

    function ShoppingListCheckOffService(){
      var service = this;

        // List of shopping items
        var toBuyTtems = [{
          name: "Cookies",
          quantity: 10
        },{
          name: "Pepto Bismal",
          quantity: 20
        },{
          name: "Milk",
          quantity: 7
        },{
          name: "Cake",
          quantity: 5
        },{
          name: "Orio",
          quantity: 30
        },{
          name: "Crisps",
          quantity: 50
        }];


        var boughtItems = [];


        service.removeItem = function (itemIdex) {

          boughtItems.push(toBuyTtems[itemIdex]);

          toBuyTtems.splice(itemIdex, 1);
        };

        service.emptyArray=function (arrayLength) {

            return arrayLength === 0;


        }

        service.getShopList = function () {
          return toBuyTtems;
        };
        service.getItems = function () {
          return boughtItems;
        };
    }


  })();
