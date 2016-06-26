angular.module('platformSdk', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'ngMessages']);

angular.module('platformSdk').config(function($stateProvider, $urlRouterProvider) {
    // Initialize Parse with your Parse application javascript keys
    Parse.initialize('XgAml3HZ8fe4UGzOIC7uSEsVpXkxMtgJPfHI488N',
                   '2MiqqoJMZiKV1JwbuqYuPReMmfXFy2GGuFvdgXBl');
    Parse.serverURL = 'https://parseapi.back4app.com';

    $stateProvider.state('initiatives', {
        url: '/initiatives',
        templateUrl: 'partial/initiatives/initiatives.html',
        resolve: {
            initiativesObj: ['InitiativesSrv', function (InitiativesSrv){
                return InitiativesSrv.getAll();
            }]
        },
        controller: ['$scope', 'initiativesObj', function($scope, initiativesObj){
            console.log(initiativesObj);
            $scope.initiatives = initiativesObj;
        }]
    });

    $stateProvider.state('friends', {
        url: '/friends',
        templateUrl: 'partial/friends/friends.html'
    });
    $stateProvider.state('initiative', {
        url: '/initiatives/:id',
        templateUrl: 'partial/initiative/initiative.html'
    });
    $stateProvider.state('user', {
        url: '/users/:id',
        templateUrl: 'partial/user/user.html'
    });

    $stateProvider.state('profile', {
        url: '/users/:id/profile',
        templateUrl: 'partial/profile/profile.html'
    });

    $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'partial/register/register.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('platformSdk').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
