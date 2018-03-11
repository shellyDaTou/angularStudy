angular.module('myApp', []);
angular.module('myApp').controller('GreetCtrl', function($scope,$rootScope) {
    $scope.name = 'datou';
    $rootScope.department = 'Angular';
});
angular.module('myApp').controller('ListCtrl', function($scope) {
    $scope.names = ['Igor','Misko','Vojta'];
});//同一个moudle中定义两个controller



