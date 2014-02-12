function AppCtrl ($scope) {
  $scope.setActive = function (type) {
    $scope.destinationsActive = '';
    $scope.flightsActive = '';
    $scope.reservationsActive = '';
    $scope[type + 'Active'] = 'active';
  },
  $scope.clients = [
  		{name : "Wiggle", url : "http://www.wigglelondon.com/", logo : "wiggleduo"},
  		{name : "Terry Francis", url : "http://www.youtube.com/watch?v=9PpWz_WBUJk", logo : "terryf"},
  		{name : "Nathan Coles", url : "http://www.djnathancoles.com/", logo : "nathan08"},
  		{name : "Superfreq", url : "http://superfreq.org/", logo : "superfreq"},
  		{name : "Mr.C", url : "http://soundcloud.com/mrcsuperfreq", logo : "mrc"},
  		{name : "Eddie Richards", url : "http://www.eddierichards.net/", logo : "eddierichards"},
  		{name : "Dave Mothersole", url : "http://www.facebook.com/pages/Dave-Mothersole/126764627374602", logo : "mothersole"},
  		{name : "Robert Owens", url : "http://www.facebook.com/pages/Robert-Owens/167358279947609", logo : "owensoriginal"},
  		{name : "Matthew Jonson", url : "http://www.facebook.com/MathewJonson808", logo : "mathewjonson"},
  		{name : "Steve Bug", url : "http://www.facebook.com/pages/steve-bug/8517364710", logo : "sbug"},
  		{name : "Schlomo", url : "http://www.shlo.co.uk/", logo : "schlomo"},
  		{name : "Bellatrix", url : "http://www.bellatrixonline.com/", logo : "bellatrix"},
  		{name : "DTPM", url : "http://www.dtpm.net/", logo : "dtpm"},
  		{name : "Circus", url : "circus.net", logo : "circ"},
  		{name : "Martin Buttrich", url : "http://www.facebook.com/pages/Martin-Buttrich/292169510801", logo : "buttrich"},
  		{name : "Danny Rampling", url : "http://dannyrampling.com/", logo : "rampling"},
  		{name : "Joey Negro", url : "http://www.facebook.com/joeynegro", logo : "joeynegro"},
  		{name : "Andrew Weatherall", url : "http://www.facebook.com/pages/Andrew-Weatherall/107264935975144", logo : "aweatherall"},
  		{name : "Norman Jay", url : "http://www.normanjay.com/", logo : "norman"},
  		{name : "Josh Wink", url : "http://www.joshwink.com/", logo : "jwinkonra"},
  		{name : "Nicky Holloway", url : "http://www.facebook.com/pages/Nicky-Holloway/16209633996", logo : "nholloway"},
  		{name : "Gordon Mac(KissFM)", url : "http://uk.linkedin.com/in/gordonmac1", logo : "gmac"},
  		{name : "Jazzy B", url : "http://www.jazzyb.com/", logo : "jazzyb"},
  		{name : "16B", url : "http://omid16b.com/", logo : "omid"},
  		{name : "Colin Dale", url : "http://www.facebook.com/pages/Colin-Dale/17584431599", logo : "cdale"},
  		{name : "Justin Robertson", url : "http://www.facebook.com/pages/justin-robertson/28628171691", logo : "justinrobertson"},
  		{name : "Raymundo Rodriguez", url : "http://twitter.com/RaymundoNosleep", logo : "raymundo"},
  		{name : "Central St Martins", url : "http://www.csm.arts.ac.uk/", logo : "cstmartin"},
  		{name : "Red Bull", url : "http://www.redbull.co.uk/", logo : "redbull"},
  		{name : "Redlight", url : "redlight.org", logo : "redlight"},
  		{name : "L-Vis 1990", url : "http://www.facebook.com/LVis1990", logo : "lvis"},
  ];
};
