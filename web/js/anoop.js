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
                $("#content").append('<hr><iframe src="'+url+'" name="iframe" id="iframe" frameborder=0 style="width:100%;height:400px;"></iframe>');
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