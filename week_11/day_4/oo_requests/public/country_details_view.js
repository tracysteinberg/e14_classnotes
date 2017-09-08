var CountryDetailsView = function(detailsElement) {
  this.detailsElement = detailsElement;
}

CountryDetailsView.prototype.render = function(country){
  var pTag = document.createElement('p');
  pTag.innerHTML = "<h2>" + country.name + " </h2>";
  this.detailsElement.appendChild(pTag);
} 