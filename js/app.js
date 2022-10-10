let mainCtrl = angular.module('mainCtrl', []);
mainCtrl.controller('phones', function($scope, $http){
    $scope.title = "Angular - Telefonkönyv";
    $scope.newdata = {};
    $scope.categories = [
        {
            "name":"Család",
            "value": "csalad"
        },
        {
            "name": "Rokon",
            "value": "rokon"
        },
        {
            "name":"Ismerős",
            "value": "ismeros"
        }
    ]
    $scope.adatok = angular.fromJson(window.localStorage.getItem('telefonkonyv'));
    $scope.Add = function(){
        if (JSON.stringify($scope.newdata)=="{}"){

        }
        else{
            if ($scope.adatok==null){
                $scope.adatok = [];
            }
            $scope.adatok.push(new Telefon([$scope.adatok.length, $scope.newdata.name, $scope.GenNumber(), $scope.newdata.category]))
            window.localStorage.setItem('telefonkonyv', angular.toJson($scope.adatok));
        }
    }
    $scope.Delete = function(who){
        $scope.adatok.splice($scope.adatok.findIndex(g=>who==g.id), 1);
        window.localStorage.setItem('telefonkonyv', angular.toJson($scope.adatok));
        
        console.log($scope.adatok);
    }
    $scope.GenNumber = function(){
        let string = `+36 ${Math.floor(Math.random()*99)+1} `
        for (let i = 0; i < 7; i++) {
            string+=Math.floor(Math.random()*7)+1;
        }
        if ($scope.adatok.includes(string)) return GenNumber();
        else return string;
    }

})


