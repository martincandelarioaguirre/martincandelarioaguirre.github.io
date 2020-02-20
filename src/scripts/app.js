'use strict';

//define the 'app' module
var app = angular.module("app", []);

app.controller("appController", ['$scope',
    function ($scope) {
        $scope.hello = 'Hello World Martin';

        $scope.personalInformation = {
            Name: "Martin Candelario Aguirre",
            BirthDay: new Date("1992-02-10"),
            Age: new Date("1992-02-10"),
            YearsOfExperience: new Date("2014-06-01"),
            Location: "Guadalajara, Jalisco, Mexico",
            Degree: "IT Engineer"
        }

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

        $scope.calculateAge = function(birthday) { // birthday is a date
            var ageDifMs = Date.now() - birthday.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }

        $scope.calculateExperience = function(startDate) {
            var difdt = new Date(new Date() - startDate);

            return((difdt.toISOString().slice(0, 4) - 1970) + " Years " + (difdt.getMonth()+1) + " Months ");
        }
    }
]);
