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
    },"Now, for the fun part ...","Let's go through every single project I've built from the start of time.","Yeah, you don't have a choice.",{
        text: "Binox Web Services",
        description: "To facilitate development of projects outsourced to us, we launched Binox Web Services to not only design and develop solutions, but to maintain web servers, design graphics content, and host the web content onto the internet. While I did all of the coding, I occasionally also designed logos and icons using Adobe Photoshop.</p><p>This project was my very first and is broken at several points. I've retained it so you can see where I began and how far I've come.",
        images:["images/screenshots/binoxservice.png"]
    },{
        text: "Binox Internet Search",
        description: "Developed an unreleased internet search engine to potentially compete with existing popular search engines. I designed an architecture and method to search the entire internet without having the user enter a search query. This was partially achieved my categorizing and cataloging the entire internet.",
        images:['images/screenshots/isearch.png']
    },{
        text: "Binox Blogs",
        description: "Developed and designed a free blogging platform for the Binox IntOS. Technology used was MySQL, PHP, AJAX, Javascript, and HTML.",
        images: ["images/screenshots/blog.jpg"]
    },{
        text: "Endurance 2015",
        description: "On January 17th, 2015, I organized India's first startup press conference in Koramangala, Bangalore, at TechHub. As part of Binox, we invited startups to register for a week and had 30+ startups sign up for an opportunity to talk to India's leading journalists for 30 minutes (per startup). We shortlisted 5 startups and they were given an opportunity to present along with us. I organized and funded the entire event, built the event website for the same, and helped invite journalists to the event. Technology used was PHP, MySQL, AJAX, Javascript, HTML, and Adobe Photoshop (for invites).",
        images: ["images/screenshots/endurance.png"]
    },{
        text: "Binox intOS",
        description: "Developing an internet Operating system required us to understand the structure of the internet and how it can be improved. Binox intOS organizes the internet, enabling users of the internet to customize their experience, use it effectively, and multitask on the internet with ease. intOS also aims at bridging the gap between the real and virtual world. This was an invention and I have filed a patent for the same in India and US. The intOS is designed primarily around a social network structure with support for users to search and find people they know. Furthermore, the OS had apps that allows users to share pictures, songs, videos, and use all of the other external apps of the internet on one platform. The OS's popular apps are Pictures, Music, Videos, Binox Blogs, Internet Search, BStore, and SkyBox to name a few. Technology stack involved MySQL, PHP, and CentOS as base architecture.",
        images: ["images/screenshots/blogin.jpg"]
    },{
        text: "SkyBox",
        description: "Skybox is a cloud file storage and sharing platform. I had to design, code, and decide key factors of SkyBox. Deciding what goes where and what doesn't and what needs to be included is a huge part of what I do for SkyBox. Conceived the idea, developed end-to-end by me using MySQL, PHP, AJAX, JavaScript, CSS, and HTML.",
        images: ["images/screenshots/skybox.png"]
    },{
        text: "Planet Binox",
        description: "Started a formal online media channel to air video and article content from the Binox team. Developed end to end by me using MySQL, PHP, JavaScript, CSS, HTML, and AJAX.",
        images: ["images/screenshots/pbx.jpg"]
    },{
        text: "Eye",
        description: "Eye is a navigation app that allows you to track your friends and family real-time on a map. It consists of several options to protect one's privacy. Since it contains a social network of its own, nobody can track a person without their consent and without being notified. Currently live in the store for Windows Phone. Developed end to end by me using PHP, MySQL, Visual C#, and XAML.",
        url: "https://www.microsoft.com/en-us/store/p/eye-by-binox/9nblggh5vqvr",
        images: ["images/screenshots/eye1.png","images/screenshots/eye2.png","images/screenshots/eye3.png"]
    },{
        text: "Daredeliver",
        description: "A 24x7 peer to peer same-day delivery service in Bangalore. Conceived the idea, developed it, marketed, and launched by me. Used Cordova Phonegap, PHP, and MySQL.",
        url: "https://play.google.com/store/apps/details?id=me.binox.daredeliver",
        images: ["images/screenshots/dd1.png","images/screenshots/dd2.png","images/screenshots/dd3.png"]
    },{
        text: "Ecolekt",
        description: "An Android app that I developed for a client for ewaste collection. This app was built using MySQL, PHP (Silex), AJAX, Java, Cordova Phonegap, CSS, Javascript, and HTML.",
        url: "https://play.google.com/store/apps/details?id=me.binox.android.ecolekt",
        images: ["images/screenshots/ec1.png","images/screenshots/ec2.png","images/screenshots/ec3.png","images/screenshots/ec4.png"]
    },{
        text: "Pramod Kathavi",
        description: "A website for a client who's a Supreme Court lawyer. He needed a management portal as well to handle clients and their case files. This was built using PHP, MySQL, AJAX, CSS, JS, Adobe Photoshop, and HTML.",
        url: "http://www.pramodkathavi.com/",
        images: ["images/screenshots/pk1.jpg","images/screenshots/pk2.jpg"]
    },{
        text: "SPIN Vista Cloud",
        description: "A cloud product for Spectral Insights for viewing deep zoom images for various datasets (mostly medical) was built by me. Included tools to pan, zoom, annotate, crop, manage workspaces, upload large files with an image stitching pipeline, and ability to share workspaces with other participants. Used MySQL, PHP, jQuery, AngularJS, CSS, and HTML for base tech architecture. Used OpenSeadragon, paperjs, and THREE.js for deep image zoom functionality.",
        images:["images/screenshots/vista.png"]
    },{
        text: "Spectral Dashboard",
        description: "Built a cloud-based user and product management dashboard for the entire company to keep track of users, products, licences, and patient files. Admins can handle tickets, manage user accounts, generate licence keys, and generate reports of activity happening on any product in the company. Languages used: PHP, MySQL, AJAX, CSS (Bootstrap), jQuery, AngularJS, and HTML.",
        images:["images/screenshots/dashboard.jpg"]
    },{
        text: "HemoCalc (previously Haemocalc)",
        description: "A hemotology tool for pathologists to view analysis results of blood such RBCs, WBCs, and platelets among other types of cells. Medical slides of blood smears are used by Spectral Insights' proprietary acquisition module which involves a microscope attached to a camera and spectrometer and images of the slide are acquired. HaemoCalc analyses these images, performs classification on the different kinds of cells captured and provides details information on every single cell detected. It also allows pathologists to identify diseases and disorders based on the distribution of WBCs and RBCs in a given blood smear based on normal human blood standards. The entire front-end and analysis modules were developed for both local data viewing as well as to view data on a cloud set up. Languages used: Python, PHP, MySQL, AJAX, CSS, jQuery, AngularJS, HTML, ChartJS, ThreeJS, PaperJS, and OpenSeadragon.",
        images:["images/screenshots/hemocalc.jpg","images/screenshots/hemocalc2.jpg","images/screenshots/hemocalc3.jpg"]
    },{
        text: "Spectral Insights Website",
        description: "Developed, designed, and hosted the company website. The entire website is internally sourced through Spectral Dashboard where the team has access to the website's contents and can change images, textual data, etc. from the dashboard. Languages used: PHP, MySQL, AJAX, CSS, jQuery, Javascript, HTML, and Adobe Photoshop.",
        url: "http://www.spectralinsights.com/",
        images: ["images/screenshots/spectral1.jpg","images/screenshots/spectral2.jpg"]
    },{
        text: "Chalk",
        description: "A ground-truth marking training tool for pathologists and doctors alike, Chalk lets instructors/reviewers set up tests with images of pap smears, blood smears, and even tissue biposies and have them annotated. This data can then be used as a live testing tool for doctors to see if they can identify the marked regions correctly. The entire portal and website was developed using MySQL, PHP, AJAX, CSS, HTML, jQuery, OpenSeadragon, paperJS, chartJS, AngularJS, and Adobe Photoshop.",
        images:["images/screenshots/chalk.jpg"]
    },{
        text: "HistoCalc",
        description: "An analysis tool that helps pathologists and doctors to run algorithms of various kinds to analyse tissue biopsy images and even blood smears. Different algorithms can be chained together to discover a new workflow and derive new insights into histopathology. The entire portal was developed using MySQL, PHP, AngularJS, jQuery, Bootstrap 3, CSS3, AJAX, Adobe Photoshop, and HTML.",
        images:["images/screenshots/histocalc1.jpg","images/screenshots/histocalc2.jpg"]
    },{
        text: "Putt Putt",
        description: "A small webapp built as part of Dust for a client who wanted a portal to find golf courses on a map. Built the entire app using Google Maps, jQuery, Bootstrap, Silex, AJAX, MySQL, and deployed on Heroku.",
        images:[]
    },{
        text: "Full Candidate",
        description: "A webapp that I worked on at Dust for a Swiss client who wanted a platform for job recruiters to post their requirements and have candidates submit video resumes instead of traditional text based resumes. The candidate is expected to introduce themselves and show off their skills on video and submit it as part of the submission process. Built the entire app using AngularJS, jQuery, Bootstrap, Silex, AJAX, Youtube, MySQL, Sendgrid, and Heroku.",
        url: "https://dusthq-full-candidate.herokuapp.com/home",
        images: ["images/screenshots/fc1.jpg","images/screenshots/fc2.jpg"]
    },{
        text: "Renco",
        description: "A webapp for a Denmark based client who wanted a booking form for customers to book home cleaners. Complete with payment module, billing, and booking form, it was exclusive to Denmark. I built this using AngularJS, jQuery, Bootstrap, Silex, AJAX, Stripe API, MySQL, and Heroku.",
        url: "https://dusthq-renco.herokuapp.com/",
        images: ["images/screenshots/renco1.jpg"]
    },{
        text: "Drag N Check",
        description: "A webapp built for an Arabian marketing client who wanted a utility for marketing heads and creative heads to specify marketing creatives and share data. The utility not only helps marketers specify the details of what creatives need to be uploaded, but their dimensions, file size, file type, etc. The upload utility also checks the same. I built this using AngularJS, jQuery, Bootstrap, Amazon S3, Silex, Google login, MySQL, AJAX, and Heroku.",
        url: "https://dusthq-dragncheck.herokuapp.com/login",
        images: ["images/screenshots/dragncheck.jpg"]
    },{
        text: "Senca",
        description: "A research webapp for UK based client that displays content as suggestions to people who are composing a research article as they type. It hosts a dashboard for admins to specify data sources to provide it with resources to know where to suggest content from. I built this using AngularJS, ContentTools editor, Bootstrap, Web scraping, Silex, MySQL, and Heroku.",
        url: "https://dusthq-senca.herokuapp.com/",
        images: ["images/screenshots/senca1.jpg"]
    },{
        text: "Denevents",
        description: "A webapp for a Denmark based client who wanted an exclusive events portal like Eventbrite for Denmark. I built this using AngularJS, Bootstrap, Lister template, Silex, AJAX, MySQL, Google maps, and Heroku.",
        url: "https://dusthq-denevents.herokuapp.com",
        images: ["images/screenshots/denevents.jpg"]
    },{
        text: "Sales Intelligence",
        description: "An analytics webapp built for a client from France. It analyses your emails from Gmail and tells you who you had the best communicative leads with. Meant to be an aiding tool for lead generators, this points out who has responded back to those cold calling emails for a marketer to identify a potential customer. Built using AngularJS, Bootstrap, Gmail API, Gmail Oauth, Silex, AJAX, MySQL, and Heroku."
    },{
        text: "Dustbot",
        description: "Dustbot is a bot that can be taught how to answer questions. Dustbot can be taught to communicate with users in a certain fashion, ask questions, process answers, and handle responses. Built as a generic bot with no purpose, Dustbot can be used for anything ranging from support bot to controlling lights and electronic modules. It does this by handling APIs and their responses. I built this using AngularJS, Bootstrap, Silex, CSS3, MySQL, Sendgrid, and Heroku. For a demo, try the landing page bot that asks you a few questions and creates an entire home page for your idea.",
        url: "https://dustbot.herokuapp.com/bot/1",
        images: ["images/screenshots/dustbot1.jpg","images/screenshots/dustbot2.jpg"]
    },{
        text: "DaDaFund",
        description: "Built an API that accepts a transaction value, rounds it to the next round figure, calculates the difference and donates the difference to charity. This API can be monitored and plugged into any payment gateway. Users have the option of choosing which charities to send money to and charities are provided with a dashboard to see incoming funds. Built this using ClearDB MySQL, Heroku, Silex, AngularJS, Bootstrap, Sendgrid, Stripe, and AWS S3.",
        url: "https://dusthq-dadafund.herokuapp.com/home",
        images: ["images/screenshots/dadafund1.jpg","images/screenshots/dadafund2.jpg"]
    },{
        text: "FAB! Apparels Billing",
        description: "A small billing module built for a clothes store in the city. Complete with inventory management, bill generation, and report generation, this was a private project. I built this using AngularJS, Bootstrap, AJAX, Silex, MySQL, Sendgrid, Adobe Photoshop, and Heroku.",
        images: ["images/screenshots/fab_logo.JPG"]
    },{
        text: "Dust Architecture",
        description: "I developed Dust's entire web platform. The previous version had few issues and we decided to revamp everything. From data migration from MongoDB to MySQL and RoR to PHP Silex to developing the database and the entire UI with its API calls, I built it. Also integrated Sendgrid's emailing API for Dust Broadcast lists along with Stripe's payment API. I built this using Heroku, ClearDB MySQL, Sendgrid, Stripe, Silex, AngularJS, Bootstrap, and AWS S3 for file storage.",
        images: ["images/screenshots/dust1.png","images/screenshots/dust2.png"]
    },"And data scraping ... a LOT of it!", "Interestingly, I also have a patent in my name!",
    {
        text: "SERVICE PROVIDER FACILITATING ACCESS OF DIVERSE WEB-BASED SERVICES",
        description: "Long and fancy name for a patent, but I filed it in India and the US. A lot has changed over the years but this was the initial filing.",
        url: "http://www.patentsencyclopedia.com/app/20140059117"
    },"Running my own startup got me some media exposure at a national level.","Here's all of that for me to unnecessarily bask in my past glory!",{
        text: "City Boys Create Networking Site With A Dislike Button",
        description: "Bangalore Mirror - The guy on the extreme left is me!",
        url: "http://bangaloremirror.indiatimes.com/bangalore/others/City-boys-create-networking-site-with-a-dislike-button/articleshow/21322680.cms",
        images: ["https://static.toiimg.com/thumb/imgsize-10963,msid-21322682,width-400,resizemode-4/21322682.jpg"]
    },{
        text: "Website by students (in Kannada)",
        description: "Prajavani - This was written in our local state language, Kannada. Google's translation of the same ends up being hilarious.",
        url: "http://www.prajavani.net/news/article/2012/10/10/121219.html"
    },{
        text: "Three CS grads hope to create a hub for everything you do on the Internet. They call it Binox.",
        description: "Yourstory",
        url: "https://yourstory.com/2013/12/binox/",
        images: ["https://images.yourstory.com/2013/12/WP_20131115_003.jpg?auto=compress"]
    },{
        text: "Interact",
        description: "Ignire Magazine (Pages 59-62)",
        url: "https://issuu.com/ignire/docs/september_-_patterns"
    },{
        text: "Endurance 2015 (in Kannada)",
        description: "Vijay Karnataka - Also written in the local state language, Kannada. This article was about the startup press conference we organized.",
        url: "http://www.vijaykarnatakaepaper.com/Details.aspx?id=19737&boxid=31845328"
    },{
        text: "The dare deliverer!",
        description: "Deccan Chronicle",
        url: "https://www.deccanchronicle.com/lifestyle/viral-and-trending/141116/the-dare-deliverer.html",
        images: ["https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-pvr6njh1114mpe50nv4h7kt9v5-20161113234848.Medi.jpeg"]
    }, 
    "And that's it! Hopefully, I've made some kind of impression on you.",
    "Please feel free to reach out to me about anything you like. I'm open to new opportunities, jobs, and freelance work.",
    {
        text: "Here's all the info you need to get in touch with me:",
        description: '<ul class="list-group"><li class="list-group-item"><strong>Email</strong> anoop.santhanam@gmail.com</li><li class="list-group-item">Skype</strong> anoop.santhanam</li><li class="list-group-item"><a href="https://www.linkedin.com/in/anoop-santhanam-742a6256/"><strong>LinkedIn</strong> https://www.linkedin.com/in/anoop-santhanam-742a6256/</a></li><li class="list-group-item"><a href="https://github.com/stonebinox/"><strong>Github</strong> https://github.com/stonebinox/</a></li><li class="list-group-item"><a href="https://www.visualcv.com/hsnd_0f7xdw"><strong>Formal CV</strong> https://www.visualcv.com/hsnd_0f7xdw</a></li></ul>'
    }
    ];
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
                    case 8:
                    $("ul.nav").find("li").removeClass("active");
                    $("#projects").parent().addClass("active");
                    break;
                    case 37:
                    $("ul.nav").find("li").removeClass("active");
                    $("#patents").parent().addClass("active");
                    break;
                    case 39:
                    $("ul.nav").find("li").removeClass("active");
                    $("#media").parent().addClass("active");
                    break;
                    case 48:
                    $("ul.nav").find("li").removeClass("active");
                    $("#contact").parent().addClass("active");
                    break;
                }
                var text=$scope.messages[$scope.position];
                $("#maintext").html('');
                $("#click").css("opacity","1.0");
                $("#content").html('');
                $("#maintext").fadeIn();
                $("#click").css("opacity","0.0");
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
            $("#click").css("opacity","1.0");
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
                    list+='<div class="col-sm-6 text-center"><img src="'+image+'" class="img-thumbnail" style="width:100%;margin-top:20px;cursor:pointer;" ng-click="previewImage(\''+image+'\')" data-toggle="tooltip" title="Preview this image" data-placement="auto"></div>';
                }
                list+='</div>';
                $("#content").append(list);
                $('[data-toggle="tooltip"]').tooltip({
                    trigger: "hover"
                });
                $compile("#content")($scope);
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
    $scope.previewImage=function(url){
        var text='<img src="'+url+'" class="img-responsive" width="100%">';
        messageBox("Preview",text);
    };
    $scope.clearScreen=function(){
        $("#click").css("opacity","0.0");
        $("#maintext").html('');
        $("#content").html('');
    };
    $scope.results=[];
    $scope.searchMe=function(){
        if(validate($scope.search)){
            $scope.clearScreen();
            $scope.results.length=0;
            $("#maintext").html('Results for <span style="color:#ffa500;">'+$scope.search+'</span>');
            for(var i=0;i<$scope.messages.length;i++){
                var message=$scope.messages[i];
                if(typeof message == "string"){
                    if(message.toLowerCase().indexOf($scope.search)!=-1){
                        $scope.results.push(i);
                    }
                }
                else{
                    console.log(message);
                    var text=message.text;
                    var desc=message.description;
                    if(text.toLowerCase().indexOf($scope.search)!=-1){
                        $scope.results.push(i);
                    }
                    if(validate(desc)){
                        if(desc.toLowerCase().indexOf($scope.search)!=-1){
                            if($scope.results.indexOf(i)==-1){
                                $scope.results.push(i);
                            }
                        }
                    }
                }
            }
            $scope.displayResults();
        }
        else{
            $scope.position=0;
            $scope.displayText();
        }
    };  
    $scope.displayResults=function(){
        if($scope.results.length>0){
            var output='';
            for(var i=0;i<$scope.results.length;i++){
                var result=$scope.results[i];
                var message=$scope.messages[result];
                if(typeof message=="string"){
                    output+='<div class="well dark"><div class="row"><div class="col-sm-10">'+message+'</div><div class="col-sm-2 text-right"><button type="button" class="btn btn-primary btn-sm"  ng-click="position='+result+';displayText();">Open</button></div></div></div>';
                }
                else{
                    var text=message.text;
                    var desc=message.description;
                    if(!validate(desc)){
                        desc="No description found.";
                    }
                    output+='<div class="panel panel-default"><div class="panel-heading bold">'+text+'</div><div class="panel-body dark">'+desc+'</div><div class="panel-footer text-right"><button type="button" class="btn btn-primary btn-sm"  ng-click="position='+result+';displayText();">Open</button></div></div>';
                }
            }
            $("#content").html(output);
            $compile("#content")($scope);
        }
        else{
            $("#content").html('<h3 class="text-left">No results found.</h3>');
        }
    };
});