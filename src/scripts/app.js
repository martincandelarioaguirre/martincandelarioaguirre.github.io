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
            Degree: "IT Engineer",
            CareerLevel: "Software Developer",
            Phone: "### ### ####",
            Email: "m.c.a._92@hotmail.com",
            Passport: "Yes",
            Resume: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it      look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,      sometimes on purpose (injected humour and the like)."
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
