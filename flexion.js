/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('flexionApp', []);
app.controller('flexionCtrl', function($scope) {
    $scope.calculationResult = "";
    $scope.firstValue = 0.00;
    $scope.secondValue = 0.00;
    $scope.thirdValue = 0.00;
    $scope.clearValues = function() {
        $scope.calculationResult = "";
        $scope.firstValue = 0.00;
        $scope.secondValue = 0.00;
        $scope.thirdValue = 0.00;
        var canvas = document.getElementById('triangle');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    $scope.calculateTriangle = function() {
        $scope.calculationResult = "";
        //Populate the values from input as numbers
        var firstVal = Number($scope.firstValue).toFixed(2);
        var secondVal = Number($scope.secondValue).toFixed(2);
        var thirdVal = Number($scope.thirdValue).toFixed(2);
        //Clear the canvas 
        var canvas = document.getElementById('triangle');
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        //Check for valid values
        if($scope.firstValue != null && Number(firstVal) > 0 && 
               $scope.secondValue != null && Number(secondVal) > 0 && 
               $scope.thirdValue != null && Number(thirdVal) > 0 ){
            //Check For All Equal Sides
            if(firstVal == secondVal  && secondVal == thirdVal){
                $scope.calculationResult = "Your triangle is Equilateral.";
                drawTriangle(firstVal,secondVal,thirdVal);
                //Check for Valid values for sides to form triangle
            }else if(((Number(thirdVal) >= Number(firstVal)) && (Number(thirdVal) >= Number(secondVal)) && ((Number(firstVal) + Number(secondVal)) >= thirdVal)) ||
                    ((Number(secondVal) >= Number(firstVal)) && (Number(secondVal) >= Number(thirdVal)) && ((Number(firstVal) + Number(thirdVal)) >= secondVal)) ||
                    ((Number(firstVal) >= Number(secondVal)) && (Number(firstVal) >= Number(thirdVal)) && ((Number(thirdVal) + Number(secondVal)) >= firstVal))){
                //Check for Valid values for two sides are equal    
                if(Number(firstVal) == Number(secondVal) || Number(secondVal) == Number(thirdVal) || Number(thirdVal) == Number(firstVal)){
                        $scope.calculationResult = "Your triangle is Isosceles.";
                        drawTriangle(firstVal,secondVal,thirdVal);
                    }else{
                        $scope.calculationResult = "Your triangle is Scalene.";
                        drawTriangle(firstVal,secondVal,thirdVal);
                    }
             }else{
                $scope.calculationResult = "The sum of two sides should be greater than or equal to third side to form a triangle. These values don't represent triangle.";
            }
        }else{
            $scope.calculationResult = "Please enter valid values for each side.";
        }
        
    }
});


function drawTriangle(fVal, sVal, tval){
var canvas = document.getElementById('triangle');
var context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);
context.beginPath();
context.moveTo(0, fVal*10);
context.lineTo(fVal*10, 0);
context.lineTo(sVal*10, fVal*10);
 
context.closePath();

context.fillStyle = "rgb(78, 193, 243)";
context.fill();
}


