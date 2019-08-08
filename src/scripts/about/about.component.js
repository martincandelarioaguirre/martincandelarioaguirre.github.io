'use strict';

angular.
    module('app').
    component('aboutTemplate', {
        templateUrl: 'src/scripts/about/about.component.html',
        controller:[
            function AboutController() {
                var self = this;
                self.name = 'this is a hello world for template';
            }
        ]
    });

