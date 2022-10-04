"use strict";
window.onload = function() {
    valueStats();
    loanStats();
    rateStats();
}; 

 function valueStats (){
// query element event handler
const calculateValueBtn = document.getElementById("calculateValueBtn");
if (calculateValueBtn) {
    calculateValueBtn.onclick = onCalculateValueBtnClicked;
}
}

function onCalculateValueBtnClicked(){
//query element
const intrestRateInput = document.getElementById("intrestRateInput");
const lengthLoanInput = document.getElementById("lengthLoanInput");
const principleInput = document.getElementById("principleInput");
const contributionInput = document.getElementById("contributionInput");
const presentValueResult = document.getElementById("presentValueResult");
// calculate
let prince = Number(principleInput.value);
let term = Number(lengthLoanInput.value);
let rate = Number(intrestRateInput.value)*0.01;
let contribute = Number(contributionInput.value);
let i = rate/contribute;
let n = contribute*term;
let presentValue = prince*((1-Math.pow(1+i,-n))/i);
//create your message to display
let message3 = ` ${ presentValue.toFixed(2) }`;
//display your message
presentValueResult.innerText = message3;
}
function loanStats (){
    const calculateLoanBtn = document.getElementById("calculateLoanBtn");
   if (calculateLoanBtn) { calculateLoanBtn.onclick = onCalculateLoanBtnClicked;
    }
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
   if (calculateRateBtn)  { calculateRateBtn.onclick = onCalculateRateBtnClicked;
    }
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
        let days = 365; 
        let endingValue = p*Math.pow(1+i/days,days*t);
        //display
        let message4 = `${endingValue}`;
        endingResultc.innerText = message4;
    }