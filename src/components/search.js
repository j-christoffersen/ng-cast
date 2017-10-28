angular.module('video-player')

.component('search', {
  bindings: {
    result: '<'
  },
  controller: function(youTube) {
    this.search = function(query, successCallback) {
      var options = {
        query: query,
        maxResults: 10,
        key: window.YOUTUBE_API_KEY,
      };
      youTube.search(options, successCallback);
    };
  },
  templateUrl: 'src/templates/search.html'
});
