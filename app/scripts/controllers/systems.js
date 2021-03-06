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
