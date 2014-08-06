/**
 * Created by dmitriy.ryajov on 7/24/14.
 */
require.config({
    baseUrl: 'app/scripts',
    paths: {
        jquery: '../bower_components/jquery/jquery',
        pagejs: '../bower_components/page.js/index',
        underscore: '../bower_components/underscore/underscore'
    },
    shims: {
        pagejs: {
            exports: "page"
        }
    }
});
