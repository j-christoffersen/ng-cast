angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    
    this.selectVideo = function (index) {
      this.currentVideo = this.videos[index];
    }.bind(this);
    
    this.searchResults = function() {
      // TODO
    };
  },
  templateUrl: 'src/templates/app.html'
});
