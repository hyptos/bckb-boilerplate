/*jshint -W031 */
require.config({
    paths: {
        'jquery': '/jquery/dist/jquery',
        'underscore': '/underscore/underscore',
        'backbone': '/backbone/backbone',
        'text': '/lib/text'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        }
    },
    deps: ['jquery', 'underscore', 'backbone']
});

require([
    'backbone', 'routes/index'
], function(Backbone, Router) {
    new Router();
    Backbone.history.start();
});
