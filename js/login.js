document.getElementById('login-signup').addEventListener('click', function () {
    // console.log("Button kicked")

    /* Get user email  */
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    /* Get user Password  */
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword, userEmail);

    if (userEmail == 'i@love.you' && userPassword == 'lol') {
        // console.log('valid');
        window.location.href = 'banking.html';
    } else {
        // console.log('hi fool!!!!')
    }
})
