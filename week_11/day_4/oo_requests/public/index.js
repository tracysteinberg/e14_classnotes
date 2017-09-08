window.onload = function(){
  //get the country data
  //Model
  var countryData = new AjaxRequest('https://restcountries.eu/rest/v2');
  countryData.getData();

  //View
  var select = document.querySelector('#country-list');
  var countrySelectView = new CountrySelectView(select, countryData);

  var detailsElement = document.querySelector('#country-details');
  var countryDetailsView = new CountryDetailsView(detailsElement);

  countrySelectView.onChange = function(country) {
    countryDetailsView.render(country);
  }

} 