'use strict';

app.controller('RigCtrl', function ($scope) {
    $scope.rigs = [
      {type:'Party', size:'1000W', price:'300'},
      {type:'Function', size:'5kW', price:'500'},
      {type:'Event', size:'15kW', price:'800'}
    ];
    $scope.rigpic = [
        {src: 'images/slides/barpara.jpg', desc: 'Bar @ Paramount: Wiggle'},
        {src: 'images/slides/ccut.jpg', desc: 'Image 02'},
        {src: 'images/slides/decksviewparamount.jpg', desc: 'Image 03'},
        {src: 'images/slides/djkevgrif.jpg', desc: 'Image 04'},
        {src: 'images/slides/djtiefschwarz.jpg', desc: 'Image 05'},
        {src: 'images/slides/mackieatpara.jpg', desc: 'Image 06'},
        {src: 'images/slides/natcomcafe.jpg', desc: 'Image 07'},
        {src: 'images/slides/sam_1129.jpg', desc: 'Image 08'},
        {src: 'images/slides/urbk.jpg', desc: 'Image 09'}
    ];
});
