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
    $scope.messages=["Hi!","My name is Anoop Santhanam.","This is me showing the world who I am and what I've done so far in life."];
    $scope.position=null;
    $scope.displayText=function(){
        if($scope.position!=null){
            if($scope.position<$scope.messages.length){
                var text=$scope.messages[$scope.position];
                $("#maintext").html('');
                $("#maintext").fadeIn();
                $scope.spellText(0);
            }
        }
    };
    $scope.spellText=function(pos){
        var text=$scope.messages[$scope.position];
        if(pos>=text.length){
            $scope.position+=1;
            $("#maintext").append('<span class="blinking-cursor">|</span>');
            setTimeout(function(){
                $("#maintext").fadeOut(2500);
                setTimeout(function(){
                    $scope.displayText();
                },500);
            },2000);
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
});