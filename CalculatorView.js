"use strict";

function CalculatorView(){

    var num = 0;
    var pressedNumber = 0;
    var paragraph = document.getElementById("value");
    var displayedCurrency = document.getElementById("currency");
    var button1 = document.getElementById("one");
    var button2 = document.getElementById("two");
    var button3 = document.getElementById("three");
    var button4 = document.getElementById("four");
    var button5 = document.getElementById("five");
    var button6 = document.getElementById("six");
    var button7 = document.getElementById("seven");
    var button8 = document.getElementById("eight");
    var button9 = document.getElementById("nine");
    var button0 = document.getElementById("zero");
    var buttonequals = document.getElementById("equality");
    var buttonc = document.getElementById("c");
    var homeCurrency = document.getElementById("choice1");
    var foreignCurrency = document.getElementById("choice3");
    var bankFee = document.getElementById("choice2");
    var sideBarCloseButton = document.getElementById("cButton");

    this.open = function () {
        document.getElementById("sidebar").style.width = "120px";
    };

    this.close = function () {
        document.getElementById("sidebar").style.width = "0";
    };

    this.showValue = function(value){
        num = value;
        paragraph.innerHTML += num;
    };

    this.wholeNumber = function () {
        return paragraph.innerHTML;
    };

    this.getForeignCurrency = function () {
        var foreignCurrency = document.getElementById("choice3");
        return foreignCurrency.options[foreignCurrency.selectedIndex].value;
    };

    this.getHomeCurrency = function () {
        var homeCurrency = document.getElementById("choice1");
        return homeCurrency.options[homeCurrency.selectedIndex].value;
    };

    this.chooseCurrency = function () {
       homeCurrency = document.getElementById("choice1")[document.getElementById("choice1").selectedIndex].value;
       foreignCurrency = document.getElementById("choice3")[document.getElementById("choice3").selectedIndex].value;
       localStorage.setItem('homeCurr', homeCurrency);
       localStorage.setItem('foreignCur', foreignCurrency);
       displayedCurrency.innerHTML = homeCurrency + " -> " + foreignCurrency;
    };

    this.getCurrencyDetails = function () {
        return displayedCurrency.innerHTML;
    };

    this.getLoadedCurrencyDropdowns = function () {
        if(localStorage.getItem("homeCurr") === null){
            document.getElementById("choice1").value = "GBP";
        }else{
            document.getElementById("choice1").value = localStorage.getItem('homeCurr');
        }

        if(localStorage.getItem('foreignCur') === null){
            document.getElementById("choice3").value = "EUR";
        }else{
            document.getElementById("choice3").value = localStorage.getItem('foreignCur');
        }
    };

    this.getLoadedCurrency = function () {
        if(localStorage.getItem('homeCurr') === null || localStorage.getItem('foreignCur') === null){
            displayedCurrency.innerHTML = "GBP -> EUR";
        }
        else {
            displayedCurrency.innerHTML = localStorage.getItem('homeCurr') + " -> " + localStorage.getItem('foreignCur');
        }
        return displayedCurrency.innerHTML;
    };

    this.getBankFee = function () {
        localStorage.setItem('bankFee', bankFee[bankFee.selectedIndex].value);
        return bankFee[bankFee.selectedIndex].value;
    };

    this.getLoadedBankFee = function () {
        if(localStorage.getItem('bankFee') === null){
             document.getElementById("choice2").value = 0;
        }
        else {
            document.getElementById("choice2").value = localStorage.getItem('bankFee');
        }
    };

    this.loadRatesFromECB = function (xml) {
        var rates = 0;
        var xmlDoc = xml.responseXML;
        var x = xmlDoc.getElementsByTagName("Cube");
        for (var i = 2; i < x.length; i++){
            rates = x[i].getAttribute("rate");
            if(calculatorView.getHomeCurrency() === "EUR"){
                if(x[i].getAttribute("currency") === calculatorView.getForeignCurrency()){
                    localStorage.setItem('foreignrates', rates);
                }
            }
            if(calculatorView.getForeignCurrency() === "EUR"){
                if(x[i].getAttribute("currency") === calculatorView.getHomeCurrency()){
                    localStorage.setItem('homerates', rates);
                }
            }
            if(calculatorView.getHomeCurrency() !== "EUR" && calculatorView.getForeignCurrency() !== "EUR"){
                if(x[i].getAttribute("currency") === calculatorView.getHomeCurrency()){
                    localStorage.setItem('homerates', rates);
                }
                if(x[i].getAttribute("currency") === calculatorView.getForeignCurrency()){
                    localStorage.setItem('foreignrates', rates);
                }
            }
        }
    };

    this.clearValue = function(){
        paragraph.innerHTML = "0";
    };

    this.removeValue = function () {
        paragraph.innerHTML = "";
    };

    this.removeZero = function () {
        if(paragraph.innerHTML === "0"){
            paragraph.innerHTML = "";
        }
    };

    this.getNumberOne = function () {
        return pressedNumber = 1;
    };

    this.getNumberTwo = function () {
        return pressedNumber = 2;
    };

    this.getNumberThree = function () {
        return pressedNumber = 3;
    };

    this.getNumberFour = function () {
        return pressedNumber = 4;
    };

    this.getNumberFive = function () {
        return pressedNumber = 5;
    };

    this.getNumberSix = function () {
        return pressedNumber = 6;
    };

    this.getNumberSeven = function () {
        return pressedNumber = 7;
    };

    this.getNumberEight = function () {
        return pressedNumber = 8;
    };

    this.getNumberNine = function () {
        return pressedNumber = 9;
    };

    this.getNumberZero = function () {
        return pressedNumber = 0;
    };

    this.setClearButtonCallback = function (callback) {
        buttonc.addEventListener("click", callback);
    };

    this.setNumberOneButtonCallback = function (callback) {
        button1.addEventListener("click", callback);
    };

    this.setNumberTwoButtonCallback = function (callback) {
        button2.addEventListener("click", callback);
    };

    this.setNumberThreeButtonCallback = function (callback) {
        button3.addEventListener("click", callback);
    };

    this.setNumberFourButtonCallback = function (callback) {
        button4.addEventListener("click", callback);
    };

    this.setNumberFiveButtonCallback = function (callback) {
        button5.addEventListener("click", callback);
    };

    this.setNumberSixButtonCallback = function (callback) {
        button6.addEventListener("click", callback);
    };

    this.setNumberSevenButtonCallback = function (callback) {
        button7.addEventListener("click", callback);
    };

    this.setNumberEightButtonCallback = function (callback) {
        button8.addEventListener("click", callback);
    };

    this.setNumberNineButtonCallback = function (callback) {
        button9.addEventListener("click", callback);
    };

    this.setNumberZeroButtonCallback = function (callback) {
        button0.addEventListener("click", callback);
    };

    this.setEqualsButtonCallback = function (callback) {
        buttonequals.addEventListener("click", callback);
    };

    this.setCloseButtonCallback = function (callback) {
        sideBarCloseButton.addEventListener("click", callback);
    };
}