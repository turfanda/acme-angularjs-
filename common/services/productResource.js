(function(){
    "use strict";

    angular.module("common.services").factory("productResource",["$resource",pr]);

    function pr ($resource){
        return $resource("/api/products/:productId");
    }
}());