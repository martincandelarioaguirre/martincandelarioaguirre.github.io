'use strict';

//define the 'app' module
var app = angular.module("app", []);

app.controller("appController", ['$scope',
    function ($scope) {
        $scope.hello = 'Hello World Martin';

        $scope.jobs = [
            {
                CompanyName: "UST-GLOBAL",
                CompanyLocation: "CompanyLocation",
                PeriodOfTime: "PeriodOfTime",
                Profile: "Profile of the position",
                Description: "Description of the job",
                Tools: "Tools used by project"
            },
            {
                CompanyName: "Tiempo Development",
                CompanyLocation: "CompanyLocation",
                PeriodOfTime: "PeriodOfTime",
                Profile: "Profile of the position",
                Description: "Description of the job",
                Tools: "Tools used by project"
            },
            {
                CompanyName: "Softtek",
                CompanyLocation: "CompanyLocation",
                PeriodOfTime: "PeriodOfTime",
                Profile: "Profile of the position",
                Description: "Description of the job",
                Tools: "Tools used by project"
            },
            {
                CompanyName: "Al Maximo TI",
                CompanyLocation: "CompanyLocation",
                PeriodOfTime: "PeriodOfTime",
                Profile: "Profile of the position",
                Description: "Description of the job",
                Tools: "Tools used by project"
            },
            {
                CompanyName: "Mach Tecnologia",
                CompanyLocation: "CompanyLocation",
                PeriodOfTime: "PeriodOfTime",
                Profile: "Profile of the position",
                Description: "Description of the job",
                Tools: "Tools used by project"
            },
            {
                CompanyName: "Intekel Automatizacion",
                CompanyLocation: "CompanyLocation",
                PeriodOfTime: "PeriodOfTime",
                Profile: "Profile of the position",
                Description: "Description of the job",
                Tools: "Tools used by project"
            },
            {
                CompanyName: "Etileno XXI",
                CompanyLocation: "CompanyLocation",
                PeriodOfTime: "PeriodOfTime",
                Profile: "Profile of the position",
                Description: "Description of the job",
                Tools: "Tools used by project"
            }
        ];

    }
]);
