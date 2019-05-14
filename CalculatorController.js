"use strict";
/* globals calculatorModel, calculatorView */

var calculatorModel = new CalculatorModel();
var calculatorView = new CalculatorView();
var calculatorController = null;

function CalculatorController(){

    this.loadCurrency = function () {
        calculatorView.getLoadedCurrency();
    };

    this.loadCurrencyDropdowns = function () {
        calculatorView.getLoadedCurrencyDropdowns();
    };

    this.loadBankFee = function () {
        calculatorView.getLoadedBankFee();
    };

    this.updateValueDisplay = function () {
        calculatorView.removeZero();
        calculatorView.showValue(calculatorModel.getValue());
    };

    this.clear = function () {
        calculatorView.setClearButtonCallback(function () {
            calculatorView.clearValue();
        });
    };

    this.one = function () {
        calculatorView.setNumberOneButtonCallback(function () {
            calculatorModel.updateValue(calculatorView.getNumberOne());
            calculatorController.updateValueDisplay();
        })
    };

    this.two = function () {
        calculatorView.setNumberTwoButtonCallback(function () {
            calculatorModel.updateValue(calculatorView.getNumberTwo());
            calculatorController.updateValueDisplay();
        });
    };

    this.three = function () {
        calculatorView.setNumberThreeButtonCallback(function () {
            calculatorModel.updateValue(calculatorView.getNumberThree());
            calculatorController.updateValueDisplay();
        });
    };

    this.four = function () {
        calculatorView.setNumberFourButtonCallback(function () {
            calculatorModel.updateValue(calculatorView.getNumberFour());
            calculatorController.updateValueDisplay();
        });
    };

    this.five = function () {
        calculatorView.setNumberFiveButtonCallback(function () {
            calculatorModel.updateValue(calculatorView.getNumberFive());
            calculatorController.updateValueDisplay();
        });
    };

    this.six = function () {
        calculatorView.setNumberSixButtonCallback(function () {
            calculatorModel.updateValue(calculatorView.getNumberSix());
            calculatorController.updateValueDisplay();
        });
    };

    this.seven = function () {
        calculatorView.setNumberSevenButtonCallback(function () {
            calculatorModel.updateValue(calculatorView.getNumberSeven());
            calculatorController.updateValueDisplay();
        });
    };

    this.eight = function () {
        calculatorView.setNumberEightButtonCallback(function () {
            calculatorModel.updateValue(calculatorView.getNumberEight());
            calculatorController.updateValueDisplay();
        });
    };

    this.nine = function () {
        calculatorView.setNumberNineButtonCallback(function () {
            calculatorModel.updateValue(calculatorView.getNumberNine());
            calculatorController.updateValueDisplay();
        });
    };

    this.zero = function () {
        calculatorView.setNumberZeroButtonCallback(function () {
            calculatorModel.updateValue(calculatorView.getNumberZero());
            calculatorController.updateValueDisplay();
        });
    };

    this.calculateCurrency = function () {
        calculatorView.setEqualsButtonCallback(function () {
            calculatorModel.updateValue(calculatorView.wholeNumber());
            calculatorView.removeValue();
            calculatorView.showValue(calculatorModel.calculation(calculatorView.getBankFee(), calculatorView.getCurrencyDetails(), calculatorView.getHomeCurrency(), calculatorView.getForeignCurrency()));
        });
    };

    this.close = function () {
        calculatorView.setCloseButtonCallback(function () {
            calculatorView.chooseCurrency();
            calculatorView.getCurrencyDetails();
            calculatorView.getBankFee();
            calculatorController.loadECBValues();
        });
    };

    this.loadECBValues = function () {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                calculatorView.loadRatesFromECB(this);
            }
        };
        xhttp.open("GET", "https://devweb2018.cis.strath.ac.uk/~aes02112/ecbxml.php", true);
        xhttp.send();
    };


}

calculatorController = new CalculatorController();

window.addEventListener("load", calculatorController.loadBankFee);
window.addEventListener("load", calculatorController.loadCurrencyDropdowns);
window.addEventListener("load", calculatorController.loadCurrency);
window.addEventListener("load", calculatorController.clear);
window.addEventListener("load", calculatorController.one);
window.addEventListener("load", calculatorController.two);
window.addEventListener("load", calculatorController.three);
window.addEventListener("load", calculatorController.four);
window.addEventListener("load", calculatorController.five);
window.addEventListener("load", calculatorController.six);
window.addEventListener("load", calculatorController.seven);
window.addEventListener("load", calculatorController.eight);
window.addEventListener("load", calculatorController.nine);
window.addEventListener("load", calculatorController.zero);
window.addEventListener("load", calculatorController.calculateCurrency);
window.addEventListener("load", calculatorController.close);
window.addEventListener("load", calculatorController.loadECBValues);