define([
    'jquery',
    'backbone',
    '../views/index'
], function($, Backbone, IndexView) {
    'use strict';

    var appRouter = Backbone.Router.extend({
        routes: {
            '': 'index'
        },
        initialize: function() {
            console.log('init router index');
            this.indexView = new IndexView();
        },
        index: function() {
            console.log('index view');
        }
    });
    return appRouter;
});
