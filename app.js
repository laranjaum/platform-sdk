angular.module('platformSdk', ['ui.bootstrap', 'ui.router', 'ngAnimate']);

angular.module('platformSdk').config(function($stateProvider, $urlRouterProvider) {
    // Initialize Parse with your Parse application javascript keys
    Parse.initialize('XgAml3HZ8fe4UGzOIC7uSEsVpXkxMtgJPfHI488N',
                   '2MiqqoJMZiKV1JwbuqYuPReMmfXFy2GGuFvdgXBl');
    Parse.serverURL = 'https://parseapi.back4app.com';


    $stateProvider.state('initiatives', {
        url: '/initiatives',
        templateUrl: 'partial/initiatives/initiatives.html'
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
    $stateProvider.state('files', {
        url: '/files',
        templateUrl: 'partial/files/files.html',
        resolve: {
            filesObj: ['FileSrv', function (FileSrv){
                return FileSrv.getAll();
            }]
        },
        controller: ['$scope', 'filesObj', function($scope, filesObj){
            $scope.files = [];
            for (var i = 0; i < filesObj.length; i++) {
                $scope.files[i] = {name: filesObj[i].get('name'), content: filesObj[i].get('content').url() };
            }
        }]
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
