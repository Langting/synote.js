'use strict';

/**
 * @ngdoc service
 * @name synoteClientApp.synmarkservice
 * @description
 * # synmarkservice
 * Service in the synoteClient.
 */
angular.module('synoteClient')
  .service('synmarkService', ["$http","$q", 'ENV', 'authenticationService', function ($http, $q, ENV, authenticationService, messageCenterService) {
    function createSynmark(synmark){
      var deferred = $q.defer();

      var accessToken = authenticationService.getUserInfo().accessToken;

      $http.post(ENV.apiEndpoint + "/synmark/create?access_token="+accessToken, synmark)
        .then(function (result) {

          var data = result.data;
          //if success
          //console.log(data);
          if(data.success === false){
            deferred.reject(result.data);
          }
          else {
            //$location.path('/login');
            deferred.resolve(result.data);
          }
        }, function (err) {
          deferred.reject(err);
        });

      return deferred.promise;

    }

    function deleteSynmark(synmark){
      var deferred = $q.defer();

      var accessToken = authenticationService.getUserInfo().accessToken;

      $http.delete(ENV.apiEndpoint + "/synmark/delete/"+synmark.id+"?access_token="+accessToken)
        .then(function (result) {

          var data = result.data;
          //if success
          //console.log(data);
          if(data.success === false){
            deferred.reject(result.data);
          }
          else {
            //$location.path('/login');
            deferred.resolve(result.data);
          }
        }, function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

    function saveSynmark(synmark){
      var deferred = $q.defer();

      var accessToken = authenticationService.getUserInfo().accessToken;

      $http.post(ENV.apiEndpoint + "/synmark/save/"+synmark.id+"?access_token="+accessToken, synmark)
        .then(function (result) {

          var data = result.data;
          //if success
          //console.log(data);
          if(data.success === false){
            deferred.reject(result.data);
          }
          else {
            //$location.path('/login');
            deferred.resolve(result.data);
          }
        }, function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

    function addToPlaylistItem(synmark, pliid){
      var deferred = $q.defer();

      var accessToken = authenticationService.getUserInfo().accessToken;


      $http.post(ENV.apiEndpoint + '/playlistitemsynmark/'+pliid+'/add/synmark/'+synmark.id+'?access_token='+accessToken)
        .then(function (result) {

          var data = result.data;
          //if success
          //console.log(data);
          if(data.success === false){
            deferred.reject(result.data);
          }
          else {
            //$location.path('/login');
            deferred.resolve(result.data);
          }
        }, function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

    function removeFromPlaylistItem(synmark, pliid){
      var deferred = $q.defer();

      var accessToken = authenticationService.getUserInfo().accessToken;


      $http.delete(ENV.apiEndpoint + '/playlistitemsynmark/'+pliid+'/remove/synmark/'+synmark.id+'?access_token='+accessToken)
        .then(function (result) {

          var data = result.data;
          //if success
          //console.log(data);
          if(data.success === false){
            deferred.reject(result.data);
          }
          else {
            //$location.path('/login');
            deferred.resolve(result.data);
          }
        }, function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }

    return {
      createSynmark:createSynmark,
      deleteSynmark:deleteSynmark,
      saveSynmark:saveSynmark,
      addToPlaylistItem:addToPlaylistItem,
      removeFromPlaylistItem:removeFromPlaylistItem
    }
  }]);
