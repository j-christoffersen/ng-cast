angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(params, successCallback) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true,
        q: params.query,
        maxResults: params.maxResults,
        key: params.key
      }
    }).then((response) => { successCallback(response.data.items); });
  };
});
