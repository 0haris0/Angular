var app = angular.module('Prikaz', []);
$http({
  method: 'GET',
  url: 'http://139.59.153.141:8280/talendmdm/services/rest/data/Radnici/Radnik/'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });