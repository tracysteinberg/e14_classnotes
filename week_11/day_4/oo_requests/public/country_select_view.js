var CountrySelectView = function(selectElement, countryData) {
  this.selectElement = selectElement;
  this.countryData = countryData;
  this.onChange = null;
  this.countryData.onUpdate = this.populate.bind(this);

  this.selectElement.addEventListener('change', function(event) {
    this.onChange(this.countryData.data[event.target.value]);
  }.bind(this));
}

CountrySelectView.prototype.populate = function() {
  console.log(this.countryData.data);
  var countries = this.countryData.data;

  countries.forEach(function(country, index) {
    var option = document.createElement('option');
    option.innerText = country.name;
    option.value = index;
    this.selectElement.appendChild(option);
  }.bind(this));

  this.selectElement.value = 89;

}



