/// <reference path='../typings/angularjs/angular.d.ts' />
var Demo;
(function (Demo) {
    var Post = (function () {
        function Post(title, image, description) {
            if (image === void 0) { image = ""; }
            if (description === void 0) { description = ""; }
            this.title = title;
            this.image = image;
            this.description = description;
        }
        return Post;
    })();
    Demo.Post = Post;
    var HomeController = (function () {
        function HomeController($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            $scope.vm = this;
            $scope.vm.message = 'Hello World';
            $scope.vm.alert_msg = "This is my demo example binding data use typescript";
        }
        HomeController.prototype.get_data = function () {
            var self = this;
            self.$http.get('/json')
                .success(function (data) {
                self.$scope.vm.arr = data.list;
                self.$scope.vm.alert_msg = "Hey, you get data success! Thanks! Click 'Fesh data' and more random item!";
            })
                .error(function (error) {
                console.log(error);
            });
        };
        HomeController.$inject = ['$scope', '$http'];
        return HomeController;
    })();
    Demo.HomeController = HomeController;
    var app = angular.module('myapp', []);
    app.config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
    });
    app.controller('HomeController', HomeController);
})(Demo || (Demo = {}));
