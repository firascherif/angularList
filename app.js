angular.module('BlankApp', ['ngMaterial', 'ngMessages'])
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('communication', 'img/communication-icons.png', 24);
  })
  .controller('AppCtrl', function($scope) {
    var imagePath = 'img/60.jpg';

    $scope.phones = [{
      type: 'Home',
      number: '(555) 251-1234'
    }, {
      type: 'Cell',
      number: '(555) 786-9841'
    }, {
      type: 'Office',
      number: '(555) 314-1592'
    }];
    $scope.todos = [{
      face: imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, ];
  });