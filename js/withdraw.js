// addEventListener Added

document.getElementById('btn-withdraw').addEventListener('click', function(){
    // withdraw value
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const currentWithdraw = parseFloat(withdrawFieldString);

    
    // clear the withdraw Field

    withdrawField.value = '';


    if(isNaN(currentWithdraw)){
        alert('Please Provide a valid Number');
        return;
    }

    // Withdraw Output
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalString);


    // balance Output
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if( currentWithdraw > previousBalanceTotal){
        alert('Insufficient Balance');
        return;
    }

    
    // 
    const currentWithdrawTotal = previousWithdrawTotal + currentWithdraw;
     
    // set the value(withdraw)
    withdrawTotal.innerText = currentWithdrawTotal;



    const totalBalance = previousBalanceTotal - currentWithdraw;

    // Set the value (Total Balance)

    balanceTotal.innerText = totalBalance;
     


})