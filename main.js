function CommonController($scope){
    $scope.commonFn = function(){
        alert('这里是公用的功能')
    }
}
function Controller1($scope){
    $scope.greeting = {
        text:'hello1'
    };
    $scope.test1 = function(){
        alert('test1');
    }
}
function Controller2($scope){
    $scope.greeting = {
        text:'hello2'
    };
    $scope.test2 = function(){
        alert('test2');
    }
}