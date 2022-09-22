const billAmount = document.querySelector("#Bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
// const nextBtn = document.querySelector("#check-button-next");
// const cashBox = document.querySelector(".cashing");
// const checkbtn = document.querySelector("#cash-button-cash");
// const returnChg = document.querySelector(".return");

const availableNotes = [2000, 500, 100, 50, 20, 10 , 5, 1];

// let BillAmount = Number(billAmount.value);
// let CashGiven = Number(cashGiven.value);

// console.log(cashGiven.value);
// checkButton.addEventListener("click" ,() => console.log("clicked"));

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if (Number(billAmount.value) > 0){
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            // console.log("checked")
            const amountToBeReturned =  Number(cashGiven.value) - Number(billAmount.value);
            calculateChange(amountToBeReturned);
       }
       else{
        showMessage("The cash provided should be atleast equal to bill amount");
       }
    }
    else{
        showMessage("Invalid Bill Amount");
        // message.style.display ="block"
        // message.innerText = "The bill amount should be greater than 0";

    }
});

function calculateChange(amountToBeReturned){
    for (let i = 0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    // message.style.display="None";
    message.style.display="block";
    message.innerText = msg;
}
