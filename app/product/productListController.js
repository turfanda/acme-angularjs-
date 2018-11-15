(function(){
    "use strict"
    angular.module("productManagment")
    .controller("ProductListController",["productResource",PLC]);

    function PLC(productResource){
        var vm = this;
       

        productResource.query(function(data){
            vm.products=data;
        })
            vm.showImage = false;

            vm.toggleImage = function() {
                vm.showImage = !vm.showImage;
            }
    }
}());