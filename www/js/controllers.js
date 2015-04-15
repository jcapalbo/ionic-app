angular.module('app.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('PlaylistsCtrl', function ($scope) {
        $scope.playlists = [
            {title: 'Reggae', id: 1},
            {title: 'Chill', id: 2},
            {title: 'Dubstep', id: 3},
            {title: 'Indie', id: 4},
            {title: 'Rap', id: 5},
            {title: 'Cowbell', id: 6}
        ];
    })

    .controller('ExpenseCtrl', function ($scope, $ionicModal) {
        $scope.users = {
            list: [
                {name: "Cap-Dog"},
                {name: "Shay"},
                {name: "Beck"},
                {name: "Scott"},
                {name: "Gman"},
                {name: "DEMIN"}
            ],
            selected: {
                paidBy: {},
                charge: []
            }
        };

        var userSelectedMany = function(newUser, type) {
            var idx = _.indexOf($scope.users.selected.charge, newUser);
            if (idx > -1) {
                $scope.users.selected.charge.splice(idx, 1);
            } else {
                $scope.users.selected.charge.push(newUser);
            }
        };

        var userSelectedSingle = function(newUser) {
            $scope.users.selected.paidBy = newUser;
        };

        $scope.selectFunc = userSelectedMany;

        $ionicModal.fromTemplateUrl('templates/userlist.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });


        $scope.closeUserList = function () {
            $scope.modal.hide();
        };

        $scope.showUserList = function (type) {
            if (type === 'single') {
                $scope.selectFunc = userSelectedSingle;
            } else if (type === 'multi') {
                $scope.selectFunc = userSelectedMany;
            }
            $scope.modal.show();
        };
    })
    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    });
