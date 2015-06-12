'use strict';

var app = angular.module('bbangApp', [
  'ngResource',
  'ngRoute',
  'ngAnimate',
  'angular-carousel',
  'angular-accordion',
  'ngSanitize'
]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: function ($scope) {
          $scope.PageClass = 'main-class';
        }
      })
      .when('/systems', {
        templateUrl: 'views/systems.html',
        controller: "RigCtrl"
      })
      .when('/terms', {
        templateUrl: 'views/terms.html',
        controller: "TermsCtrl"
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: function($scope) {
          $scope.PageClass = 'about-class';
        }
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: "ContactCtrl"
      })
      .otherwise({
        redirectTo: '/'
      })
})
.directive('helloMaps', function () {
    return function (scope, elem, attrs) {
        var mapOptions,
        latitude = attrs.latitude,
        longitude = attrs.longitude,
        map;

        latitude = latitude && parseFloat(latitude, 10) || 51.338762553296625;
        longitude = longitude && parseFloat(longitude, 10) || -0.120849609375;
        mapOptions = {
          zoom: 7,
          center: new google.maps.LatLng(latitude, longitude)
        };
        map = new google.maps.Map(elem[0], mapOptions);
    };
})
.directive('flowType', function($compile){
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        var options = {};
        options.maximum = attrs.maximum || 9999;
        options.minimum = attrs.minimum || 1;
        options.minFont = attrs.minFont || 1.5;
        options.maxFont = attrs.maxFont || 3;
        options.fontRatio = attrs.fontRatio || 35;
        options.lineRatio = attrs.lineRatio || 1.45;
        element.flowtype(options);
      }
    };
})
.controller('AppCtrl', function ($scope) {
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
      {name : "L-Vis 1990", url : "http://www.facebook.com/LVis1990", logo : "lvis"}
  ];

});

'use strict';

app.controller('TermsCtrl', function($scope){
  $scope.toggleDefs = function () {
    scope.isContentVisible = !scope.isContentVisible;
  };
  $scope.defs = [
      {deftitle:'Definitions', content:'The hired items are referred to as the “Equipment”\nThe “Supplier” shall be Big Blue Audio.\nThe “Client” shall be the parties entering the agreement of hire of equipment.\n'},
      {deftitle:'Delivery & Collection', content:'The Supplier or an authorised employee of the company will deliver, operate & collect equipment unless arrangements have been previously agreed between the Client and the Supplier.\nThe Supplier or an authorised employee of the company must have free access to the Equipment at all times.The Supplier or an authorised employee of the company must have adequate parking facilities in order to load in & load out equipment.\nThe Client must sign for receipt of goods, to obtain any rights as to any following complaint. Goods received, which appear to be damaged, must be acknowledged by the signatory.Any non-delivery must be advised by the Client to the Supplier within 24 hours for the Supplier to investigate.\n'},
      {deftitle:'Booking Fee', content:'The Client must leave a booking fee with the supplier in advance of the hire period. The booking fee shall be at least 25% of the hire total. The Supplier will not accept responsibility for unsolicited hire booking and confirmation will not be given until a booking fee has been received. Refunds on the booking fee cannot be made under any circumstances if the hire is cancelled.\n All hires need paying in full to secure the booking\n'},
      {deftitle:'Proof of ID', content:'Supplier requires that ID must be produced for all new customers. Three forms of ID are required with at least one form being photo identification.\nA passport, a driving licence accompanied by 3 recent utility bills. The Client must be over 18 to make a booking.\n'},
      {deftitle:'Payment', content:'Payment of the hire charge, the booking deposit (if applicable) and the equipment deposited may be via bank transfer, cheque, PayPal or debit/credit cards (debit/credit card payment is unavailable until the start of November 2009).\n'},
      {deftitle:'Client Responsibilities', content:'Where the Client collects, operates and returns the equipment, the Client’s responsibilities will include that:\ra) All equipment is insured as in the event of loss or damage the Client is personally liable for the cost of replacement.\rb) The equipment is only used by competent personnel and is only used for its intended purpose.\rc) The equipment is connected correctly and is protected by suitable fuses and proper earthing.\nTransit of equipment-If the equipment is to be transported by any person other than the Supplier then the equipment must be suitably protected in transit with adequate packing and handling precautions remaining the responsibility of the Client.Equipment may not be moved outside of the United Kingdom without prior consent of the Supplier.\n'},
      {deftitle:'Damages', content:'The Client must satisfy himself that the equipment is in good order before accepting delivery.\nThe Client must declare to the supplier any damages that occur during the hire period.\nThe Client must not repair or attempt to repair damaged or faulty equipment.\nWhere equipment has failed due to an inherent fault or wear and tear the Client may submit a written claim to the Supplier at the time of return or collection of equipment.\nIf the claim is accepted by the Supplier a refund of part or all of the hire charge relating to that piece of equipment will be offered in the form of a credit note.The acceptance of any claim and the offer of a refund is not an admission of liability but simply a gesture of goodwill from the Supplier to the Client.\nThe Client shall be responsible for all expenses involved arising from any breakdown and losses of damages incurred by the Supplier due to the Client’s negligence, misdirection or misuse of the Equipment, and for payment of the hire charges during the period the Equipment is idle due to such a breakdown.\n'},
      {deftitle:'Change of Conditions', content:'The Supplier reserves the right to alter or amend the terms & conditions of equipment hire without warning or prior notification\n'}
    ];
  $scope.PageClass = 'terms-class';
});

'use strict';

app.controller('RigCtrl', function ($scope) {
  $scope.PageClass = 'system-class';
  $scope.rigs = [
    {type:'Party', size:'1000W', price:'300'},
    {type:'Function', size:'5kW', price:'500'},
    {type:'Event', size:'15kW', price:'800'}
  ];
  $scope.rigpic = [
      {src: 'images/slides/barpara.jpg', desc: 'Bar @ Paramount: Wiggle'},
      {src: 'images/slides/ccut.jpg', desc: 'Clearcut Xmas Party'},
      {src: 'images/slides/decksviewparamount.jpg', desc: 'Superfreq @ Paramount'},
      {src: 'images/slides/djkevgrif.jpg', desc: 'Image 04'},
      {src: 'images/slides/djtiefschwarz.jpg', desc: 'DJ Tiefschwarz @ Superfreq'},
      {src: 'images/slides/mackieatpara.jpg', desc: 'Image 06'},
      {src: 'images/slides/natcomcafe.jpg', desc: 'Nathan Coles @ the Cafe'},
      {src: 'images/slides/sam_1129.jpg', desc: 'Eddie Richards @ Wiggle'},
      {src: 'images/slides/urbk.jpg', desc: 'Urban Kings Launch Party : Kings X'}
  ];
  $scope.currentIndex = 0;
  $scope.setCurrentSlideIndex = function(index){
    $scope.currentIndex = index;
  };
  $scope.isCurrentSlideIndex = function(index){
    return $scope.currentIndex === index;
  };
  $scope.prevSlide = function () {
    $scope.currentIndex = ($scope.currentIndex < $scope.rigpic.length - 1) ? ++$scope.currentIndex : 0;
  };
  $scope.nextSlide = function () {
    $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.rigpic.length - 1;
  };
});
app.animation('.slide-animation', function () {
  return {
    addClass: function (element, className, done) {
      if (className == 'ng-hide') {
          TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
      }
      else {
          done();
      }
    },
    removeClass: function (element, className, done) {
      if (className == 'ng-hide') {
          element.removeClass('ng-hide');
          TweenMax.set(element, { left: element.parent().width() });
          TweenMax.to(element, 0.5, {left: 0, onComplete: done });
      }
      else {
          done();
      }
    }
  };
});

'use strict';

app.controller('ContactCtrl', function($scope){
  $scope.PageClass = 'contact-class';
  $scope.submitForm = function(isValid) {
	// check to make sure the form is completely valid
	if ($scope.form_22683541517354.isValid) {
		alert('Mail Sent. Thanks');
		}
	};
});
