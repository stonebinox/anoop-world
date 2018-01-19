/*---------------------------------
Author: Anoop Santhanam
Date Created: 16/1/18 17:38
Comments: Main JS file.
Fun fact: Putting this up EXACTLY 
6 years after I put Binox up. 
Coincidence? I think not!
---------------------------------*/
var app=angular.module("anoop",[]);
app.controller("home",function($scope,$http,$compile){
    $scope.messages=["Hi!","My name is Anoop Santhanam.","This is me showing the world who I am and what I've done so far in life.",{
        text: "This is where I did my education.",
        images: ["images/school.png","images/pu.png","images/ncb.png","images/christ.jpg"]
    },{
        text: "And this is a summary of my work experience!",
        images: ["images/freelancer.jpg","images/binox.png","images/spectral_logo.png","images/dust-logo.png"]
    },"Now, for the fun part ...","Let's go through every single project I've built from the start of time, shall we?","Yeah, you don't really have a choice. I'll make sure it's fun though!",{
        text: "Binox Web Services",
        description: "To facilitate development of projects outsourced to us, we launched Binox Web Services to not only design and develop solutions, but to maintain web servers, design graphics content, and host the web content onto the internet. While I did all of the coding, I occasionally also designed logos and icons using Adobe Photoshop.</p><p>This project was my very first and is broken at several points. I've retained it so you can see where I began and how far I've come.",
        url: "https://69.28.95.218/binoxservice"
    },{
        text: "Binox Internet Search",
        description: "Developed an unreleased internet search engine to potentially compete with existing popular search engines. I designed an architecture and method to search the entire internet without having the user enter a search query. This was partially achieved my categorizing and cataloging the entire internet. <span class='text-danger'>Warning:</span> It has plenty of bugs.",
        url: "https://69.28.95.218/isearch"
    },{
        text: "Binox Blogs",
        description: "Developed and designed a free blogging platform for the Binox IntOS. Technology used was MySQL, PHP, AJAX, Javascript, and HTML.",
        url: "https://69.28.95.218/blox?id=8"
    },{
        text: "Endurance 2015",
        description: "On January 17th, 2015, I organized India's first startup press conference in Koramangala, Bangalore, at TechHub. As part of Binox, we invited startups to register for a week and had 30+ startups sign up for an opportunity to talk to India's leading journalists for 30 minutes (per startup). We shortlisted 5 startups and they were given an opportunity to present along with us. I organized and funded the entire event, built the event website for the same, and helped invite journalists to the event. Technology used was PHP, MySQL, AJAX, Javascript, HTML, and Adobe Photoshop (for invites).",
        url: "https://69.28.95.218/endurance"
    },{
        text: "Binox intOS",
        description: "Developing an internet Operating system required us to understand the structure of the internet and how it can be improved. Binox intOS organizes the internet, enabling users of the internet to customize their experience, use it effectively, and multitask on the internet with ease. intOS also aims at bridging the gap between the real and virtual world. This was an invention and I have filed a patent for the same in India and US. The intOS is designed primarily around a social network structure with support for users to search and find people they know. Furthermore, the OS had apps that allows users to share pictures, songs, videos, and use all of the other external apps of the internet on one platform. The OS's popular apps are Pictures, Music, Videos, Binox Blogs, Internet Search, BStore, and SkyBox to name a few. Technology stack involved MySQL, PHP, and CentOS as base architecture.",
        url: "https://69.28.95.218/"
    },{
        text: "SkyBox",
        description: "Skybox is a cloud file storage and sharing platform. I had to design, code, and decide key factors of SkyBox. Deciding what goes where and what doesn't and what needs to be included is a huge part of what I do for SkyBox. Conceived the idea, developed end-to-end by me using MySQL, PHP, AJAX, JavaScript, CSS, and HTML.",
        url: "https://69.28.95.218/skybox.php"
    },{
        text: "Planet Binox",
        description: "Started a formal online media channel to air video and article content from the Binox team. Developed end to end by me using MySQL, PHP, JavaScript, CSS, HTML, and AJAX.",
        url: "https://69.28.95.218/planetbx"
    },{
        text: "Eye",
        description: "Eye is a navigation app that allows you to track your friends and family real-time on a map. It consists of several options to protect one's privacy. Since it contains a social network of its own, nobody can track a person without their consent and without being notified. Currently live in the store for Windows Phone. Developed end to end by me using PHP, MySQL, Visual C#, and XAML.",
        url: "https://www.microsoft.com/en-us/store/p/eye-by-binox/9nblggh5vqvr"
    },{
        text: "Daredeliver",
        description: "A 24x7 peer to peer same-day delivery service in Bangalore. Conceived the idea, developed it, marketed, and launched by me. Used Cordova Phonegap, PHP, and MySQL.",
        url: "https://play.google.com/store/apps/details?id=me.binox.daredeliver"
    },{
        text: "SPIN Vista Cloud",
        description: "A cloud product for Spectral Insights for viewing deep zoom images for various datasets (mostly medical) was built by me. Included tools to pan, zoom, annotate, crop, manage workspaces, upload large files with an image stitching pipeline, and ability to share workspaces with other participants. Used MySQL, PHP, jQuery, JS, CSS, and HTML for base tech architecture. Used OpenSeadragon, paperjs, and THREE.js for deep image zoom functionality.",
        images:[]
    },{
        text: "Spectral Dashboard",
        description: "Built a cloud-based user and product management dashboard for the entire company to keep track of users, products, and licences. Admins can handle tickets, manage user accounts, generate licence keys, and generate reports of activity happening on any product in the company. Languages used: PHP, MySQL, AJAX, CSS, jQuery, Javascript, and HTML.",
        image:[]
    },{
        text: "HemoCalc (previously Haemocalc)",
        description: "A hemotology tool for pathologists to view analysis results of blood such RBCs, WBCs, and platelets among other types of cells. Medical slides of blood smears are used by Spectral Insights' proprietary acquisition module which involves a microscope attached to a camera and spectrometer and images of the slide are acquired. HaemoCalc analyses these images, performs classification on the different kinds of cells captured and provides details information on every single cell detected. It also allows pathologists to identify diseases and disorders based on the distribution of WBCs and RBCs in a given blood smear based on normal human blood standards. The entire front-end and analysis modules were developed for both local data viewing as well as to view data on a cloud set up. Languages used: Python, PHP, MySQL, AJAX, CSS, jQuery, Javascript, HTML, ChartJS, ThreeJS, PaperJS, and OpenSeadragon.",
        images:[]
    },{
        text: "Spectral Insights Website",
        description: "Developed, designed, and hosted the company website. The entire website is internally sourced through Spectral Dashboard where the team has access to the website's contents and can change images, textual data, etc. from the dashboard. Languages used: PHP, MySQL, AJAX, CSS, jQuery, Javascript, HTML, and Adobe Photoshop.",
        url: "http://www.spectralinsights.com/"
    },{
        text: "Chalk",
        description: "A ground-truth marking training tool for pathologists and doctors alike, Chalk lets instructors/reviewers set up tests with images of pap smears, blood smears, and even tissue biposies and have them annotated. This data can then be used as a live testing tool for doctors to see if they can identify the marked regions correctly. The entire portal and website was developed using MySQL, PHP, AJAX, CSS, HTML, jQuery, OpenSeadragon, paperJS, chartJS, and Adobe Photoshop.",
        images:[]
    },{
        text: "HistoCalc",
        description: "An analysis tool that helps pathologists and doctors to run algorithms of various kinds to analyse tissue biopsy images and even blood smears. Different algorithms can be chained together to discover a new workflow and derive new insights into histopathology. The entire portal was developed using MySQL, PHP, AngularJS, jQuery, Bootstrap 3, CSS3, AJAX, Adobe Photoshop, and HTML.",
        images:[]
    },{
        text: "Putt Putt",
        description: "A small webapp built as part of Dust for a client who wanted a portal to find golf courses on a map. Built the entire app using Google Maps, jQuery, Bootstrap, Silex, AJAX, MySQL, and deployed on Heroku.",
        images:[]
    },{
        text: "Full Candidate",
        description: "A webapp that I worked on at Dust for a Swiss client who wanted a platform for job recruiters to post their requirements and have candidates submit video resumes instead of traditional text based resumes. The candidate is expected to introduce themselves and show off their skills on video and submit it as part of the submission process. Built the entire app using AngularJS, jQuery, Bootstrap, Silex, AJAX, Youtube, MySQL, Sendgrid, and Heroku.",
        url: "https://dusthq-full-candidate.herokuapp.com/home"
    },{
        text: "Renco",
        description: "A webapp for a Denmark based client who wanted a booking form for customers to book home cleaners. Complete with payment module, billing, and booking form, it was exclusive to Denmark. I built this using AngularJS, jQuery, Bootstrap, Silex, AJAX, Stripe API, MySQL, and Heroku.",
        url: "https://dusthq-renco.herokuapp.com/"
    },{
        text: "Drag N Check",
        description: "A webapp built for an Arabian marketing client who wanted a utility for marketing heads and creative heads to specify marketing creatives and share data. The utility not only helps marketers specify the details of what creatives need to be uploaded, but their dimensions, file size, file type, etc. The upload utility also checks the same. I built this using AngularJS, jQuery, Bootstrap, Amazon S3, Silex, Google login, MySQL, AJAX, and Heroku.",
        url: "https://dusthq-dragncheck.herokuapp.com/login"
    },{
        text: "Senca",
        description: "A research webapp for UK based client that displays content as suggestions to people who are composing a research article as they type. It hosts a dashboard for admins to specify data sources to provide it with resources to know where to suggest content from. I built this using AngularJS, ContentTools editor, Bootstrap, Web scraping, Silex, MySQL, and Heroku.",
        url: "https://dusthq-senca.herokuapp.com/"
    }];
    $scope.position=null;
    $scope.displayText=function(){
        if($scope.position!=null){
            if($scope.position<$scope.messages.length){
                switch($scope.position){
                    case 3:
                    $("ul.nav").find("li").removeClass("active");
                    $("#education").parent().addClass("active");
                    break; 
                    case 4:
                    $("ul.nav").find("li").removeClass("active");
                    $("#experience").parent().addClass("active");
                    break;
                }
                var text=$scope.messages[$scope.position];
                $("#maintext").html('');
                $("#click").css("display","block");
                $("#content").html('');
                $("#maintext").fadeIn();
                $scope.spellText(0);
            }
        }
    };
    $scope.spellText=function(pos){
        var text=$scope.messages[$scope.position];
        var images=null;
        var desc=null;
        var url=null;
        if(typeof text=="object"){
            images=text.images;
            if(validate(text.description)){
                desc=text.description;
            }
            if(validate(text.url)){
                url=text.url;
            }
            text=text.text;
        }
        if(pos>=text.length){
            $scope.position+=1;
            if(validate(desc)){
                $("#content").html('<p>'+desc+'</p>');
                if(validate(url)){
                    $("#content").append('<a href="'+url+'" target="_blank">Check it out in a new tab</a>');
                }
            }
            if(validate(images)){
                var list='<div class="row">';
                for(var i=0;i<images.length;i++){
                    var image=images[i];
                    list+='<div class="col-sm-6 text-center"><img src="'+image+'" class="img-thumbnail" style="width:200px;margin-top:20px;"></div>';
                }
                list+='</div>';
                $("#content").append(list);
            }
            if(validate(url)){
                $("#content").append('<hr><iframe src="'+url+'" name="iframe" id="iframe" frameborder=0 style="width:100%;height:700px;"></iframe>');
            }
            $("#maintext").append('<span class="blinking-cursor">|</span>');
        }
        else{
            var letter=text[pos];
            $("#maintext").append(letter);
            pos+=1;
            setTimeout(function(){
                $scope.spellText(pos);
            },65);
        }
    };
    $scope.nextMessage=function(){
        $("#maintext").fadeOut(800);
        setTimeout(function(){
            $scope.displayText();
        },1500);
    };
});