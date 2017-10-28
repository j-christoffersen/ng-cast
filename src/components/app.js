angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    
    this.selectVideo = function (index) {
      if (this.videos) {
        this.currentVideo = this.videos[index];
      } else {
        this.currentVideo = null;
      }
    }.bind(this);
    
    this.searchResults = function(items) {
      this.videos = items;
      this.selectVideo(0);
    }.bind(this);
    
    var options = {
      query: '',
      maxResults: 10,
      key: window.YOUTUBE_API_KEY,
    };
    youTube.search(options, this.searchResults);    

  },
  templateUrl: 'src/templates/app.html'
});
