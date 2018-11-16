(function () {
    "user strict";
     var app = angular.module("productManagment", ["common.services","ui.bootstrap","ui.mask","ui.router","productResourceMock"]);

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
        .state("productDetail", {
            url: "/products/:productId",
            templateUrl: "app/product/productDetail/productDetailView.html",
            controller: "ProductDetailController as vm",
            resolve:{
                prs : "productResource",
                result : function(prs, $stateParams){
                    var id = $stateParams.productId;
                    return prs.get({productId:id}).$promise;
                }
            }
        })
        .state("productEdit", {
            abstract: true,
            url: "/products/edit/:productId",
            templateUrl: "app/product/productEdit/productEditView.html",
            controller: "ProductEditController as vm",
            resolve:{
                prs : "productResource",
                result : function(prs, $stateParams){
                    var id = $stateParams.productId;
                    return prs.get({productId:id}).$promise;
                }
            }
        })
        .state("productEdit.info", {
            url: "/info",
            templateUrl: "app/product/productEdit/productEditInfoView.html"
        })
        .state("productEdit.price", {
            url: "/price",
            templateUrl: "app/product/productEdit/productEditPriceView.html"
        })
        .state("productEdit.tags", {
            url: "/tags",
            templateUrl: "app/product/productEdit/productEditTagsView.html"
        });

     }
}());