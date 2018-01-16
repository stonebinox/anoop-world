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
    }];
    $scope.position=null;
    $scope.displayText=function(){
        if($scope.position!=null){
            if($scope.position<$scope.messages.length){
                var text=$scope.messages[$scope.position];
                $("#maintext").html('');
                $("#click").css("display","block");
                $("#maintext").fadeIn();
                $scope.spellText(0);
            }
        }
    };
    $scope.spellText=function(pos){
        var text=$scope.messages[$scope.position];
        var images=null;
        if(typeof text=="object"){
            images=text.images;
            text=text.text;
        }
        if(pos>=text.length){
            $scope.position+=1;
            if(validate(images)){
                var list='<div class="row">';
                for(var i=0;i<images.length;i++){
                    var image=images[i];
                    list+='<div class="col-sm-6 text-center"><img src="'+image+'" class="img-thumbnail" style="width:200px;margin:0 auto;"></div>';
                }
                list+='</div>';
                $("#content").html(list);
            }
            $("#maintext").append('<span class="blinking-cursor">|</span>');
        }
        else{
            var letter=text[pos];
            $("#maintext").append(letter);
            pos+=1;
            setTimeout(function(){
                $scope.spellText(pos);
            },100);
        }
    };
    $scope.nextMessage=function(){
        $("#maintext").fadeOut(1500);
        setTimeout(function(){
            $scope.displayText();
        },2000);
    };
});