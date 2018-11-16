(function () {
    "use strict"
    angular.module("productManagment")
        .controller("ProductDetailController",["result",PLC]);

    function PLC(result) {
        var vm = this;

        vm.product = result;

        if(vm.product.tags){
            vm.product.taglist = vm.product.tags.toString();
        }

    }
}());