window.addEventListener('load', function() {
  var url = "https://restcountries.eu/rest/v1";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();

  request.addEventListener('load', function() {
    loadCountryCharts(request.responseText);
  });

});

var loadCountryCharts = function(responseText) {
  var countries = JSON.parse(responseText);

  var countryPopulationData = countries.map(function(country){
    return {
      name: country.name,
      y: country.population
    }
  })

  var countryRegionLabels = countries.reduce(function(labels, country){
    return labels.includes(country.region) ? labels : labels.concat(country.region)
  },[])

  var countryRegionData = {
    name: "Number of Countries",
    data: []
  };

  countryRegionData.data = countryRegionLabels.map(function(regionLabel){
    return countries.filter(function(country) {
      return country.region === regionLabel 
    }).length
  })
  
  new PieChart("Country Populations", countryPopulationData);
  new ColumnChart("Countries in Different Regions", countryRegionData, countryRegionLabels);
};
