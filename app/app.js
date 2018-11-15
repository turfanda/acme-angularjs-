(function () {
    "user strict";
     var app = angular.module("productManagment", ["common.services","ui.router","productResourceMock"]);

     app.config(["$stateProvider","$urlRouterProvider",config]);

     function config ($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("/");
        $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "app/welcomeView.html"
        })
        .state("productList", {
            url: "/products",
            templateUrl: "app/product/productListView.html",
            controller: "ProductListController as vm"
        })
        .state("productEdit", {
            url: "/products/edit/:productId",
            templateUrl: "app/products/productEditView.html",
            controller: "ProductEditCtrl as vm"
        });

     }
}());