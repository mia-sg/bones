// Your app JavaScript code.

let button = document.getElementById('signup-btn');
let first_name = document.getElementById('first_name');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');

button.addEventListener('click', function(){

    let data = {
        first_name: first_name.value,
        username: username.value,
        email: email.value,
        password: password.value
    };

    enableDisableInputs(true);

    // disable the button & inputs

    enableDisableInputs(true);

    fetch('/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then( function(response){ 
         return response.json(); 
    })
    .then( function(data){ 
        // enable the button & inputs
        enableDisableInputs(false);

        // empty all input fields
        first_name.value = '';
        username.value = '';
        email.value = '';
        password.value ='';

        // alert the user
        alert('User created!');

        // focus on first input field
        first_name.focus();

        console.log(data); 
    })
    .catch( function(error){ 
        // enable the button & inputs
        enableDisableInputs(false);

        // alert the user
        alert('Something wrong happened...');

        console.log(error); 
    });
});

function enableDisableInputs(value){

    button.disabled = value;
    first_name.disabled = value;
    username.disabled = value;
    email.disabled = value;
    password.disabled = value;
}