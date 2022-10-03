"use strict";

window.onload = function() {
    valueStats();
    loanStats();
    rateStats();
}

function valueStats (){
// query element event handler
const calculateValueBtn = document.getElementById("calculateValueBtn");
calculateValueBtn.onclick = onCalculateValueBtnClicked;
}

function onCalculateValueBtnClicked(){
//query element
const intrestRateInput = document.getElementById("intrestRateInput");
const lengthLoanInput = document.getElementById("lengthLoanInput");
const principleInput = document.getElementById("principleInput");
const contributionInput = document.getElementById("contributionInput");
const presentValueResult = document.getElementById("presentValueResult");
// calculate
let p = Number(principleInput.value);
let t = Number(lengthLoanInput.value);
let r = Number(intrestRateInput.value)*0.01;
let m = Number(contributionInput.value);
let i = r/m;
let n = m*t;
let presentValue = p*((1-Math.pow(1+i,-n))/i);
//create your message to display
let message3 = ` ${ presentValue.toFixed(2) }`;
//display your message
presentValueResult.innerText = message3;
}

function loanStats (){
    const calculateLoanBtn = document.getElementById("calculateLoanBtn");
    calculateLoanBtn.onclick = onCalculateLoanBtnClicked;
    }
    function onCalculateLoanBtnClicked(){
        //query element
        const intrestRateInputb = document.getElementById("intrestRateInputb");
        const lengthLoanInputb = document.getElementById("lengthLoanInputb");
        const principleInputb = document.getElementById("principleInputb");
        const monthlyPaymentResult = document.getElementById("monthlyPaymentResult");
        const paidIntResult = document.getElementById("paidIntResult");
        // calculate
        let total = Number(principleInputb.value);
        let months = Number(lengthLoanInputb.value)*12;
        let rate = Number(intrestRateInputb.value);
        let intrest = (total * (rate * 0.01))/months; 
        let payment = ((total/months)+ intrest);
        let intrestPayment = intrest * months;
        //create your message to display
        let message = ` ${ payment }`;
        let message2 = ` ${ intrestPayment }`;
        //display your message
        monthlyPaymentResult.innerText = message;
        paidIntResult.innerText = message2;
        }
        
    function rateStats (){ 
        const calculateRateBtn = document.getElementById("calculateRateBtn");
        calculateRateBtn.onclick = onCalculateRateBtnClicked
    }
    function onCalculateRateBtnClicked(){
        //query element
        const intrestRateInputc = document.getElementById("intrestRateInputc");
        const lengthLoanInputc = document.getElementById("lengthLoanInputc");
        const principleInputc = document.getElementById("principleInputc");
        const endingResult = document.getElementById("endingResultc");
        //calculate
        let p = Number(principleInputc.value);
        let t = Number(lengthLoanInputc.value);
        let i = Number(intrestRateInputc.value);
        let n = 365; 
        let endingValue = p*Math.pow(1+i/n,n*t);
        //display
        let message4 = `${endingValue}`;
        endingResult.innerText = message4;
    }