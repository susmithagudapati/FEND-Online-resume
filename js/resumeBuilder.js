/*
This is empty on purpose! Your code to build the resume will go here.
 */
var work = {
    "jobs": [{
            "employer": "Coverfox",
            "title": "Intern",
            "location": "Mumbai",
            "dates": "21st November,2016 - present",
            "description": "Coverfox is a place to search, compare, buy, renew and manage insurance policies" +
                " for your car, bike, health, term-life and travel."
        },

        {
            "employer": "Sufo",
            "title": "Intern",
            "location": "United-States",
            "dates": "March,2016 - November,2016",
            "description": "Sufo is an online system that is used to evaluate the overall teaching and learning" +
                " components in terms of lecturer's quality assurance and performance, content and infrastructure."
        }
    ]
};



var projects = {
    "projects": [{
            "title": "Sufo",
            "dates": "April - November",
            "description": "Sufo is an online system that is used to evaluate the overall teaching and learning" +
                " components in terms of lecturer's quality assurance and performance, content and infrastructure.",
            "images": ["images/fry.jpg"]
        },

        {
            "title": "Uber-motor",
            "dates": "November,2016 - February,2017",
            "description": "Insurance policies for uber",
            "images": ["images/coverfox.jpg"]
        }
    ]
};

var bio = {
    "name": "Susmitha Gudapati",
    "role": "Student",
    "welcomeMessage": "Hello Everyone!",
    "biopic": "images/sush.jpg",
    "contacts": {
        "mobile": "xxxxxxxxxx",
        "email": "susmitha.gudapati@gmail.com",
        "github": "susmithagudapati",
        "blog": "sushmi.com",
        "location": "Mumbai"
    },
    "skills": ["programming", "badminton", "sleeping"]
};

var education = {
    "schools": [{
        "name": "Vishnu Institute Of Technology",
        "location": "Bhimavaram",
        "dates": "present",
        "degree": "Bachelors of Technology",
        "majors": ["Computer Science"],
    }, ],

    "onlineCourses": [{
            "title": "Front-end Nanodegree",
            "school": "Udacity",
            "dates": "present",
            "url": "udacity.in"
        },

        {
            "title": "Python and Django",
            "school": "Code School",
            "dates": "August,2016 - October,2016",
            "url": "https://www.codeschool.com/users/SusmithaGudapati"
        },

        {
            "title": "Front-end foundations",
            "school": "Code School",
            "dates": "August,2016 - October,2016",
            "url": "https://www.codeschool.com/users/SusmithaGudapati"
        },

        {
            "title": "Front-end formations",
            "school": "Code School",
            "dates": "August,2016 - October,2016",
            "url": "https://www.codeschool.com/users/SusmithaGudapati"
        }
    ]
};

var data = "%data%";


bio.display = function() {
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedName = HTMLheaderName.replace(data, bio.name);
    $("#header").prepend(formattedRole, formattedName);

    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedBlog = HTMLblog.replace(data, bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#topContacts:last, #footerContacts:last").append(formattedMobile, formattedEmail, formattedGithub, formattedBlog,
        formattedLocation
    );

    var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(formattedBioPic, formattedMessage);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace(data, bio.skills[i]);
            $("#skills:last").append(formattedSkills);
        }
    }
};


work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var i = 0; i < work.jobs.length; i++) {
        var formattedworkEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
        var formattedworkTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
        var formattedEmployer = formattedworkEmployer + formattedworkTitle;
        var formattedworkDates = HTMLworkDates.replace(data, work.jobs[i].dates);
        var formattedworkLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
        var formattedworkDescription = HTMLworkDescription.replace(data, work.jobs[i].description);
        $(".work-entry").append(formattedEmployer, formattedworkDates, formattedworkLocation, formattedworkDescription);
    }
}


projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var i = 0; i < projects.projects.length; i++) {
        var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
        var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
        $(".project-entry").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);
        if (projects.projects[i].images.length > 0) {
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[i].images[j]);
                $(".project-entry").append(formattedProjectImage);
            }
        }
    }
};


education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {
        var formattedName = HTMLschoolName.replace(data, education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
        var formattedDates = HTMLschoolDates.replace(data, education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
        $(".education-entry").append((formattedName + formattedDegree), formattedDates, formattedLocation);
        for (var j = 0; j < education.schools[i].majors.length; j++) {
            var formattedMajors = HTMLschoolMajor.replace(data, education.schools[i].majors[j]);
            $(".education-entry").append(formattedMajors);
        }
    }

    $(".education-entry").append(HTMLonlineClasses);
    for (var m = 0; m < education.onlineCourses.length; m++) {
        var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[m].title);
        var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[m].school);
        var formattedDates = HTMLonlineDates.replace(data, education.onlineCourses[m].dates);
        var formattedURL = HTMLonlineURL.replace(data, education.onlineCourses[m].url);
        $(".education-entry").append((formattedTitle + formattedSchool), formattedDates, formattedURL);
    }
};


$("#main").append(bio.display);
$("#main").append(work.display);
$("#main").append(projects.display);
$("#main").append(education.display);
$("#mapDiv").append(googleMap);

function inName(name) {
    var first_name = (name[0].slice(0, 1)).toUpperCase() + (name[0].slice(1)).toLowerCase();
    var title = name[1].toUpperCase();
    return first_name + " " + title;
}
