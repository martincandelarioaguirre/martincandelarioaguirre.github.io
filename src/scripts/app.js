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

        $scope.showEmailModal = function() {
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
        }

        $scope.closeModal = function() {
            var span = document.getElementsByClassName("close");
            var modal = document.getElementById("myModal");
             modal.style.display = "none";
        }

        $scope.menuShowHide = function() {
            var menu = document.getElementById("menu-items");
            var hasClass = menu.className;

            if (hasClass == "main-nav__items-visible") {
                menu.className = "main-nav__items";
            } else {
                menu.className = "main-nav__items-visible";
            }
        }

        $scope.moveToElement = function(element) {
             var elmnt = document.getElementById(element);
            elmnt.scrollIntoView({behavior: "smooth", inline: "nearest"});
        }

    }
]);
