(function ()
{
    'use strict';

    angular
        .module('chat')
        .factory('api', apiService);

    /** @ngInject */
    function apiService($resource)
    {

        var api = {};

        api.baseUrl = 'http://192.168.1.33:3000';

        api.MESSAGE = {
          getList: $resource(api.baseUrl + '/message/getList', {obj: '@obj'}, {get: {method: 'GET'}})
        };

        return api;
    }

})();
