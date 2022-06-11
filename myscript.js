const URL = "https://covid19.mathdro.id/api";

var app = angular.module("MyApp", []);
app.controller("MyCtrl", ["$scope","$http", function($scope, $http) { 
    $scope.title = "Stay Home Stay Safe";

    console.log("App Loaded...");

    // calling api 
    $http.get(URL).then( 
        (response) => {
            console.log(response.data);
            $scope.all_data = response.data;
        } ,
        (error) => {
            console.log(error);
        });

    // get country data
    $scope.get_country_data = function() {
        let country = $scope.country;

        if(country == "")
        {
            $scope.country_data = undefined; // when we write something using ng-if data will display and when we will clear text in search then country_data would have some values and will show the data. so here we have cleared that vlaues.
            return;
        }

        $http.get(`${URL}/countries/${country}`).then(
            (response) => {
                console.log(response.data);
                $scope.country_data = response.data;
            },
            (error) => {

            });

    }
}]);