

//bio
var bio = {
    "name": "Vanessa Sangiorgio",
    "role": "Front-end Web Developer",
    "contacts": {
        "mobile": "Ask for it",
        "email": "vanessa.sangiorgio@yahoo.co.uk",
        "github": "vanessa-sangiorgio",
        "twitter": "@VanessaSangi",
        "location": "Bristol, Uk"
    },
    "biopic": "images/vanessa_sangiorgio.JPG",
    "welcomeMessage": "Welcome to my story",
    "skills": ["JavaScript", "jQuery", "Css", "Bootstrap", "Git", "HTML", "Google Maps Api", "Photoshop", "Sketch"],

    "display": function() {

        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelMes = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedContact = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
        $("#header").prepend(formattedRole);
        $("#topContacts").append(formattedContact);
        $("#header").append(formattedWelMes);
        $("#header").append(formattedPic);

        if (bio.skills.length) {
            $("#header").append(HTMLskillsStart);
            for (var skill in bio.skills) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }

        function inName() {
            var surname = bio.name.trim().split(" ");
            return surname[0] + " " + surname[1].toUpperCase();
        }
        var a = inName();
        $("#header").prepend("<h1>" + a + "</h1>");

    }

};

bio.display();

//work
var work = {
    "jobs": [{
        "title": "Customer Assistant",
        "employer": "Primark",
        "dates": "2015/2016",
        "location": "Bristol, UK",
        "description": "Assisted in overall running of the department, providing an efficient sales service to customers. Proposed ideas to improve the customer experience selecting new products, reviewing the old ones finding the right suppliers and place to show them"
    }, {
        "title": "Sales Assistant",
        "employer": "Age UK Charity Shop",
        "dates": "2015",
        "location": "Bristol, UK",
        "description": "Assisting in the day-to-day running of the shop with the aim of maximising sales and profitability. Making sure the customers are served in a helpful, cheerful " +
            "and professional manner and working with other volunteers to process stock, including sorting, steaming, pricing and hanging of donated items. Responsible for till operations and handling of cash."
    }, {
        "title": "Back Office Consultant for Enel",
        "employer": "Back Office Consultant for Enel ",
        "dates": "October 2010 - 15 October 2014",
        "location": "Reggio Calabria, IT",
        "description": "The activity consisted in receiving and handling written complaints on behalf of Enel Energia, through the use of dedicated enterprise’s software." +
            " Check the availability of customer’s request, decide in autonomy the actions to solve the complaint collaborating with other departments like Billing and Credit and write a reply at the end of resolution, using strict guidelines in according to company decisions."
    }],
    "display": function() {
        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle + formattedWorkDate + formattedWorkLocation + formattedWorkDescription;
            $(".work-entry:last").append(formattedEmployerTitle);

        }
    }

};
work.display();

//project
var projects = {
    "projects": [{
        "title": "Frogger Game",
        "dates": "Starts April 2016",
        "description": "This is a reproduction of the well-known Frogger Game where the main goal is get to the water without any collision against  the bugs. Game created using function class of JavaScript. Applied Canvas Html for a better layout.",
        "images": ["images/frogger.jpg"]
    },

  {
    "title": "Curriculum Vitae Online",
    "dates": "Starts March 2016",
    "description": "I created an interactive curriculum vitae online using JavaScript and Jquery mostly, for modifying the Html code. Thanks this project I developed the necessary skills to become a Front-end Web Developer, improving my ability to problem solving. It was my first approach to Google Maps Api. ",
    "images": ["images/curriculum.jpg"]
  }, {
    "title": "Responsive Web Site",
    "dates": "February 2016",
    "description": "It was my first try to learning the best option to develop a responsive website. This project allowed me to learn version control system as Git and manage repositories on GitHub as well. Replicated a design mockup creating a responsive website using HTML and CSS.",
    "images": ["images/responsive-design-image.jpg"]
  }],
    "display": function() {
        for (var proj in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
            $(".project-entry:last").append(formattedProjectDescription);

            if (projects.projects[proj].images.length > 0) {
                for (var image in projects.projects[proj].images) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
                    $(".project-entry:last").append(formattedProjectImage);
                }
            }
        }
    }
};

projects.display();
//Education

var education = {
    "schools": [{
        "name": "College Green",
        "degree": " English First Certificate Cambridge ",
        "location": "Bristol",
        "majors": [" English spoken", " English written"],
        "dates": "2016 <br />",
        "url": "http://www.itcferraris.it/"
    }, {
        "name": "ITC G. Ferraris",
        "degree": "Diploma in Accounting and Programming",
        "location": "Reggio Calabria",
        "majors": ["Visual Basic", " Develop website", "Basic C++"],
        "dates": "Completed 2007 <br />",
        "url": "http://www.cityofbristol.ac.uk/"
    }],
    "onlineCourses": [{
        "title": "Web Developer Nanodegree",
        "school": "Udacity",
        "date": "Date: Completed July 2016 -- <br /><br />Major:   I developed and mastered the skills required to become a Front-End Web Developer. Thanks to this course I've started to build responsive websites optimized for mobile and desktop performance. I have also learned the fundamentals of web design and improved my knowledge of the three foundational languages HTML, CSS and JavaScript and some of the main JavaScript framework. <br /><br />",
        "url": " http://www.udacity.com/"
    }, {
        "title": "Level 2 Certificate in IT User Skills(ITQ)",
        "school": "NFCE",
        "date": "Date: Completed 2015",
        "url": "http://www.ncfe.org.uk/"
    }],

    "display": function() {
        for (var ed in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[ed].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[ed].degree);
            var formattedDate = HTMLschoolDates.replace("%data%", education.schools[ed].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[ed].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[ed].majors);
            $(".education-entry:last").append(formattedName);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").append(formattedDate);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajor);
        }
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var course in education.onlineCourses) {

            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedSchoolName = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            var formattedFinal = formattedTitle + formattedSchoolName + formattedDates + formattedUrl;
            $(".education-entry:last").append(formattedFinal);

        }

    }
};

education.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);

});

$("#mapDiv").append(googleMap);
