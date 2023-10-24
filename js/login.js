// addEventListener Added

document.getElementById('btn-submit').addEventListener('click', function(){ 

    // email value
    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;

    // password  value

    const passwordField = document.getElementById('password-field');
    const passwordValue = passwordField.value;

    // condition (Do not use this condition actually this is not a correct way)

    if(emailValue === 'mrk552@gmail.com' && passwordValue === 'secret'){
            window.location.href = 'bank.html';
    }
    else{
        alert('please enter a valid email and password');
    }
})