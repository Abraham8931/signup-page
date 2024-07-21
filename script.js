const form = document.getElementById("sign-up");
const statusDiv = document.getElementById("sign-up");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstname =document.getElementById('firstname').value;
    const lastname =document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone =document.getElementById('phone').value;
    const password =document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;

    if(password !==confirm_password){
        statusDiv.innerHTML = 'Password do not match';
        return;
    }

    statusDiv.innerHTML = 'Sign up Successful';
});