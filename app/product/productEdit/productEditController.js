(function () {
    "use strict"
    angular.module("productManagment")
        .controller("ProductEditController", ["result", PLC]);

    function PLC(result) {
        var vm = this;
        vm.product = result;
        vm.open=function($event){
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened=!vm.opened;
        }
    }
}());