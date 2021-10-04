const loginBtn = document.getElementById("login");
        loginBtn.addEventListener("click", function(){
const  loginArea = document.getElementById("login-area"); 
        loginArea.style.display = "none";
const transactionArea = document.getElementById("transation-area");
         transactionArea.style.display = "block";
    });
    
 
// deposit button action
    const depositBtn = document.getElementById('depositAdd');
    depositBtn.addEventListener('click',function(){
//     const depositAmount = document.getElementById("depositAmount").value;
//     const depositNum = parseFloat(depositAmount);
        const depositNum = getInputNum("depositAmount");



        // current deposit 
//     const currentDeposit = document.getElementById('currentDeposit').innerText;
//     const currentDepositNum = parseFloat(currentDeposit);
//     const totalDeposit = depositNum + currentDepositNum;
//     document.getElementById('currentDeposit').innerText = totalDeposit; 

        // current balance
//     const currentBalance = document.getElementById('currentBalance').innerText;
//     const currentAmount = parseFloat(currentBalance);
//     const totalAmount = depositNum + currentAmount;
//     document.getElementById('currentBalance').innerText = totalAmount; 

        updateSpan("currentDeposit", depositNum);
        updateSpan("currentBalance", depositNum);

    document.getElementById("depositAmount").value = "";

})
// withdraw button action 
const withdrawBtn = document.getElementById("withdrawAdd");
withdrawBtn.addEventListener("click", function(){
// const withdrawAmount = document.getElementById("withdrawAmount").value;
// const withdrawNum = parseFloat(withdrawAmount);
const withdrawNum = getInputNum("withdrawAmount");

updateSpan("currentWithdraw", withdrawNum);
updateSpan("currentBalance", -1* withdrawNum);
document.getElementById("withdrawAmount").value = "";

})
function getInputNum(id){
        const amount = document.getElementById(id).value;
        const amountNum = parseFloat(amount);
        return amountNum ;

}



function updateSpan(id, depositNum){
        const current = document.getElementById(id).innerText;
        const currentNum = parseFloat(current);
        const totalAmount = depositNum + currentNum;
        document.getElementById(id).innerText = totalAmount; 
}











//withdraw button action 






// const signUp = document.getElementById('signup');
// signUp.addEventListener('click', function(){
//     console.log('Please Fill Up this Form!');
// });


