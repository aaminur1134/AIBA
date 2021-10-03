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
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNum = parseFloat(depositAmount);

    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNum = parseFloat(currentDeposit);
    const totalDeposit = depositNum + currentDepositNum;
    document.getElementById('currentDeposit').innerText = totalDeposit; 

    const currentBalance = document.getElementById('currentBalance').innerText;
    const currentAmount = parseFloat(currentBalance);
    const totalAmount = depositNum + currentAmount;
    document.getElementById('currentBalance').innerText = totalAmount; 

    document.getElementById("depositAmount").value = "";

 
})




// const signUp = document.getElementById('signup');
// signUp.addEventListener('click', function(){
//     console.log('Please Fill Up this Form!');
// });


