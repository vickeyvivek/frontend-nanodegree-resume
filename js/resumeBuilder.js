/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Vivek Dala",
    "role": "Web Developer",
    "contacts": {
        "email": "vd9166@gmail.com",
        "mobile": "7478742076",
        "location": "Kharagpur",
        "twitter": "@vivek9166",
        "github": "vickeyvivek"
    },
    "welcomeMessage": " Welcome to my profile.",
    "skills": ["awesomeness ", "teaching ", "programming "],
    "bioPic": "image/fry.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedwelcomeMsg);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
    }
};
bio.display();

var work = {
    "jobs": [{
        "employer": "Planet Express",
        "title": "Delivery Boy",
        "dates": "January 3000 - Future",
        "location": "Kolkata",
        "description": "nice job with good earnings"
    }, {
        "employer": "Panucci's Pizza",
        "title": "Delivery Boy",
        "dates": "1998 - December 31, 1999",
        "location": "Bhubaneswar",
        "description": "tidious job with less money"
    }]
};

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

var projects = {
    "projects": [{
        "title": "Chopper Fed DC Motor Dive",
        "dates": "2016",
        "description": "The speed of separately excited DC motor can be controlled using chopper as a converter.The chopper firing circuit receives signal from controller and then chopper gives variable voltage to the armature of the motor for achieving desired speed.There are two control loops, one for controlling current and another for speed. The controller used is Proportional-Integral type which removes the delay and provides fast control.Modeling of separately excited DC motor is done. The complete layout of DC drive mechanism is obtained. The designing of current and speed controller is carried out.",
        "images": ["images/Untitled.jpg"]
    }, {
        "title": "Prepaid Energy Meter",
        "dates": "2016",
        "description": "pay according to demand",
        "images": ["images/untitled1.jpg"]
    }]
};

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

var education = {
    "schools": [{
        "name": "SHS",
        "location": "Kharagpur",
        "degree": "10th",
        "majors": ["science"],
        "dates": 2010
    }, {
        "name": "kv no.-2",
        "location": "Kharagpur",
        "degree": "12th",
        "majors": ["computer science"],
        "dates": 2012
    }, {
        "name": "CEB",
        "location": "Bhubaneswar",
        "degree": "Graduation",
        "majors": ["EEE"],
        "dates": 2016
    }],
    "onlinecourses": [{
        "title": "front end web developer",
        "school": "Udacity",
        "dates": 2016
    }]
};

education.display = function() {
    for (var edu = 0; edu < education.schools.length; edu++) {
        $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
        $(".education-entry:last").append(formattedschoolName);

        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        $(".education-entry:last").append(formattedschoolDegree);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        $(".education-entry:last").append(formattedschoolDates);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        $(".education-entry:last").append(formattedschoolLocation);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
        $(".education-entry:last").append(formattedschoolMajor);
    }
    for (var online = 0; online < education.onlinecourses.length; online++) {
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[online].title);
        $(".education-entry:last").append(formattedonlineTitle);

        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[online].school);
        $(".education-entry:last").append(formattedonlineSchool);

        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlinecourses[online].dates);
        $(".education-entry:last").append(formattedonlineDates);
    }
};
education.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

var formattedfooterMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedfooterEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedfooterTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedfooterGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedfooterLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#footerContacts").append(formattedfooterMobile);
$("#footerContacts").append(formattedfooterEmail);
$("#footerContacts").append(formattedfooterTwitter);
$("#footerContacts").append(formattedfooterGithub);
$("#footerContacts").append(formattedfooterLocation);