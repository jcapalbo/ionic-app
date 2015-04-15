angular.module('app.services', [])

    .factory('userService', function() {
        return {
            selectedUsers: []
        }
    });