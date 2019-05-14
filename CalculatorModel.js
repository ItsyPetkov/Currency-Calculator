"use strict";

function CalculatorModel(){
    var value = 0;

    this.updateValue = function (number) {
        value = number;
    };

    this.getValue = function () {
        return value;
    };

    this.calculation = function (percentage, string, homeCur, foreignCur) {
        var percentValue = 0;
        if(percentage > 0){
            percentValue = (value/100) * percentage;
            value = +value + +percentValue;
        }

        if(homeCur === "EUR" || foreignCur === "EUR"){
            if(string ===  homeCur + " -&gt; EUR"){
                value = value / localStorage.getItem("homerates");
            }
            if(string === "EUR -&gt; " + foreignCur){
                value = value * localStorage.getItem("foreignrates");
            }
        }else if(homeCur !== "EUR" && foreignCur !== "EUR"){
            value = value / localStorage.getItem("homerates");
            value = value * localStorage.getItem("foreignrates");
        }else if(homeCur === foreignCur){
            return value;
        }

        if(string === homeCur +  " -&gt; JPY"){
            return Math.round(value);
        }else{
            return Math.round(value * 100)/100;
        }
    }
}