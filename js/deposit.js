
// addEventListener Added
document.getElementById('btn-deposit').addEventListener('click', function(){

    // Deposit Value
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // Clear Input Field
    depositField.value = '';

    
    if(isNaN(newDepositAmount)){
        alert('Please Provide a valid Number');
        return;
    }


    // Deposit Output 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    currentDepositTotal = previousDepositTotal + newDepositAmount;

     // Set the value (deposit)
     depositTotal.innerText = currentDepositTotal;

    // Balance Output
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

     const totalBalance = previousBalanceTotal + newDepositAmount;

    // set the value (balance)
    balanceTotal.innerText = totalBalance;


    
})