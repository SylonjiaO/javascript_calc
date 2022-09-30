"use strict";

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
const presentValueResult = document.getElementById("presentValueResult");
// calculate
let cashflow = Number(principleInput.value);
let years = Number(lengthLoanInput.value);
let x = Number(intrestRateInput.value);
let intrest = x * 0.01; 
let presentValue = cashflow * 1 - (1/ Math.pow( 1 + intrest, years))/ intrest;
//create your message to display
let message3 = ` ${ presentValue }`;
//display your message
presentValueResult.innerText = message3;
}
function loanStats (){
    const calculateLoanBtn = document.getElementById("calculateLoanBtn");
    calculateLoanBtn.onclick = onCalculateLoanBtnClicked;
    }
    function onCalculateLoanBtnClicked(){
        //query element
        const intrestRateInput = document.getElementById("intrestRateInput");
        const lengthLoanInput = document.getElementById("lengthLoanInput");
        const principleInput = document.getElementById("principleInput");
        const monthlyPaymentResult = document.getElementById("monthlyPaymentResult");
        const paidIntResult = document.getElementById("paidIntResult");
        // calculate
        let total = Number(principleInput.value);
        let months = Number(lengthLoanInput.value)*12;
        let rate = Number(intrestRateInput.value);
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


window.onload = function(){

    valueStats();
}