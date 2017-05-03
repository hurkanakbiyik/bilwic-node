(function ()
{
    'use strict';

    angular
        .module('chat')
        .controller('ClientController', ClientController);

    /** @ngInject */
    function ClientController($scope,api)
    {
        var vm = this;
        activate();

        vm.newMessage = '';

        // When a user enters a new message...
        vm.sendMessage = function () {
            // Broadcast event to server, pass along data
            socket.emit('chat message', vm.newMessage);
            vm.newMessage = '';
        };

        // When the server sends back the new message...
        socket.on('chat message', function (msg) {
            if (msg) {
                // need to trigger angular event loop to render updated data
                $scope.$apply(function () {
                    vm.messages.push(msg)
                })
            }
        });

        /////////////////////
        function activate() {
            callMessages();
        }

        function callMessages() {
            api.MESSAGE.getList.get({},
                function(response){
                    vm.messages = response.data;
                },
                function(error){
                }
            );
        }


    }
})();