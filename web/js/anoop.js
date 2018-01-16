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
    $scope.messages=["Hi!","My name is Anoop Santhanam."];
    $scope.position=null;
    $scope.displayText=function(){
        if(validate($scope.position)){
            var text=$scope.messages[$scope.position];
            $("#maintext").html('');
            var done=$scope.spellText(0);
            if(done=="DONE"){
                $scope.position+=1;
                setTimeout(function(){
                    $scope.displayText();
                },5000);
            }
        }
    };
    $scope.spellText=function(pos){
        var text=$scope.messages[$scope.position];
        if(pos>=text.length){
            return "DONE";
        }
        else{
            var letter=text[pos];
            $("#maintext").append(letter);
            pos+=1;
            setTimeout(function(){
                return $scope.spellText(pos);
            },200);
        }
    };
});