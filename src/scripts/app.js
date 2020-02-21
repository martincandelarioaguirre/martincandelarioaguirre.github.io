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
            Resume: "Hello, "
            //Resume: "I am a highly competent mobile application software developer with eight years’ experience developing a wide range of tools for both iOS and Android for a range of clients. I have proven expertise in building sports betting and gambling apps. I understand the mobile app project     lifecycle in depth and am very capable at all aspects of development from project planning to requirements gathering through to writing and testing code, creating documentation and support. I am currently seeking long-term contract positions which will allow me to further improve my     project management skills."
        }

        $scope.jobs = [
            {
                CompanyName: "UST-GLOBAL",
                CompanyLocation: "CompanyLocation",
                PeriodOfTime: "October, 2019 -- Current",
                Profile: "Profile of the position",
                Description: "Description of the job",
                Tools: "Tools used by project"
            },
            {
                CompanyName: "Tiempo Development",
                CompanyLocation: "CompanyLocation",
                PeriodOfTime: "March, 2018 -- October, 2019",
                Profile: "Profile of the position",
                Description: "Description of the job",
                Tools: "Tools used by project"
            },
            {
                CompanyName: "Softtek",
                CompanyLocation: "CompanyLocation",
                PeriodOfTime: "July, 2017 -- March, 2018",
                Profile: "Profile of the position",
                Description: "Description of the job",
                Tools: "Tools used by project"
            },
            {
                CompanyName: "Al Maximo TI",
                CompanyLocation: "CompanyLocation",
                PeriodOfTime: "January, 2017 -- July, 2017",
                Profile: "Profile of the position",
                Description: "Description of the job",
                Tools: "Tools used by project"
            },
            {
                CompanyName: "Mach Tecnologia",
                CompanyLocation: "CompanyLocation",
                PeriodOfTime: "July, 2016 -- December, 2016",
                Profile: "Profile of the position",
                Description: "Description of the job",
                Tools: "Tools used by project"
            },
            {
                CompanyName: "Intekel Automatizacion",
                CompanyLocation: "CompanyLocation",
                PeriodOfTime: "August, 2015 -- July, 2016",
                Profile: "Profile of the position",
                Description: "Description of the job",
                Tools: "Tools used by project"
            },
            {
                CompanyName: "Etileno XXI",
                CompanyLocation: "CompanyLocation",
                PeriodOfTime: "June, 2014 -- August, 2015",
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
