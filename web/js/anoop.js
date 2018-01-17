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
        url: "https://69.28.95.218/skybox"
    },{
        text: "Planet Binox",
        description: "Started a formal online media channel to air video and article content from the Binox team. Developed end to end by me using MySQL, PHP, JavaScript, CSS, HTML, and AJAX.",
        url: "https://69.28.95.218/planetbx"
    },{
        text: "Eye",
        description: "Eye is a navigation app that allows you to track your friends and family real-time on a map. It consists of several options to protect one's privacy. Since it contains a social network of its own, nobody can track a person without their consent and without being notified. Currently live in the store for Windows Phone. Developed end to end by me using PHP, MySQL, Visual C#, and XAML.",
        url: "https://www.microsoft.com/en-us/store/p/eye-by-binox/9nblggh5vqvr"
    }];
    $scope.position=null;
    $scope.displayText=function(){
        if($scope.position!=null){
            if($scope.position<$scope.messages.length){
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