var AjaxRequest = function(url) {
  this.url = url;
  this.data = [];
  this.onUpdate = null;
}

AjaxRequest.prototype.getData = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);

  xhr.addEventListener('load', function() {
    if( xhr.status !== 200 ) return;

    var jsonString = xhr.responseText;
    this.data = JSON.parse(jsonString);
    this.onUpdate();

  }.bind(this));

  xhr.send();

}