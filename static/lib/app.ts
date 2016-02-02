/// <reference path='../typings/angularjs/angular.d.ts' />

module Demo {

    export class Post {
        title: string;
        image: string;
        description: string;

        constructor(title: string, image?: string = "", description?: string = "") {
            this.title = title;
            this.image = image;
            this.description = description;
        }
    }

    export class HomeController {        
        public arr: <Post>[];

        constructor(public $scope: any, public $http: any) {
            $scope.vm = this;
            $scope.vm.message = 'Hello World';
            $scope.vm.alert_msg = "This is my demo example binding data use typescript"
        }

        get_data() {
            var self = this;
            self.$http.get('/json')
                .success(function(data) {
                    self.$scope.vm.arr = data.list;
                    self.$scope.vm.alert_msg = "Hey, you get data success! Thanks! Click 'Fesh data' and more random item!"
                })
                .error(function(error) {
                    console.log(error);
                })
        }
        public static $inject = ['$scope', '$http']
    }

    var app = angular.module('myapp', []);

    app.config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
    });

    app.controller('HomeController', HomeController)
}