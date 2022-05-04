var database = {}

function registration_check(){
    flag = signup_validate();
    if(flag){
        username = document.getElementById("username").value
        password = document.getElementById("password").value
        database[username] = password;
        location.replace('http://127.0.0.1:5500/practical_10/index.html')
    }
}

function login_check(){
    flag = login_validate();
    if(flag){
        console.log(database)
        username = document.getElementById("username").value
        password = document.getElementById("password").value
        console.log("Login Credentials Checking")
        if(username == "devsanger" && password == 'Passw0rd!')
            location.replace('http://127.0.0.1:5500/practical_10/index.html');
    }
}



function setError(id, error){
    var element = document.getElementById(id)
    element.innerHTML = error
    element.style.color = "red"
}

function removeError(id){
    var element = document.getElementById(id)
    element.innerHTML = ""
}

// ******************** SIGNUP VALIDATIONS ********************
function signup_validate(){
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;

    // VALIDATING NAME FIELDS
    if (name.length == 0){
        setError("name_error", "*First Name cannot be empty")
        document.getElementById("name").style.borderBottom = "1px solid red"
        return false
    }
    else{
        for(i in name){
            if (!((name[i]>='a' && name[i]<='z') || (name[i]>='A' && name[i]<='Z'))){
                setError('name_error', "*name field accepts only letters")
                document.getElementById("name").style.borderBottom = "1px solid red"
                return false
            }
        }
        document.getElementById("name").style.borderBottom = "1px solid black"
        removeError("name_error")
    }

    // Username Validation
    if (username.length == 0){
        setError("username_error", "*username cannot be empty")
        document.getElementById("username").style.borderBottom = "1px solid red"
        return false
    }
    else{
        document.getElementById("username").style.borderBottom = "1px solid black"
        removeError("username_error")
    }


    // Email Validation Using Regular Expression
    if (email.length == 0){
        setError("email_error", "*email field cannot be empty")
        document.getElementById("email").style.borderBottom = "1px solid red"
        return false
    }
    else{
        regex = /([0-9]{2})([a-zA-Z]{3})([0-9]{3})(@nirmauni.ac.in)/
        if (!regex.test(email)) {
            setError("email_error", "*email must be in this form : DDCCCDDD@nirmauni.ac.in")
            document.getElementById("email").style.borderBottom = "1px solid red"
            return false
        }
        document.getElementById("email").style.borderBottom = "1px solid black"
        removeError("email_error")
    }

    // VALIDATING PASSWORD FIELDS
    let upper = false
    let lower = false
    let digit = false
    if (password.length == 0){
        setError("password_error", "*Password cannot be empty")
        document.getElementById("password").style.borderBottom = "1px solid red"
        return false
    }
    else{
        // Validating Minimum Length of password should be 8
        if (password.length < 8){
            document.getElementById("password").style.borderBottom = "1px solid red"
            setError("password_error", "*min 8 characters required")
            return false
        }
        else{
            // Validating passwords should contain lowercase, uppercase and digits
            for(i in password){
                if(password[i] >= 'a' && password[i] <= 'z')
                    lower = true
                if (password[i] >= 'A' && password[i] <= 'Z')
                    upper = true
                if (password[i] >= '0' && password[i] <= '9')
                    digit = true
            }

            // IF password does not contains any of these characters then we return error(Uppercase Lowercase and digit)
            if (!(upper && lower && digit)){
                setError("password_error", "*Password Should Contain LowerCase, UpperCase and Digits")
                document.getElementById("password").style.borderBottom = "1px solid red"
                return false
            }
            document.getElementById("password").style.borderBottom = "1px solid black"
            removeError("password_error")
        }
    }
    if (cpassword.length == 0){
        setError("cpassword_error", "*Password cannot be empty")
        document.getElementById("cpassword").style.borderBottom = "1px solid red"
        return false
    }
    else{
        document.getElementById("cpassword").style.borderBottom = "1px solid black"
        removeError("cpassword_error")
    }

    if (password != cpassword){
        setError("password_error", "*Passwords Do not Match")
        setError("cpassword_error", "*Passwords Do not Match")
        document.getElementById("password").style.borderBottom = "1px solid red"
        document.getElementById("cpassword").style.borderBottom = "1px solid red"
        return false
    }
    else{
        document.getElementById("password").style.borderBottom = "1px solid black"
        removeError("password_error")
        document.getElementById("cpassword").style.borderBottom = "1px solid black"
        removeError("cpassword_error")
    }

    return true;
}





// ******************** LOGIN VALIDATIONS ********************
function login_validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Username Validation
    if (username.length == 0){
        setError("username_error", "*username cannot be empty")
        document.getElementById("username").style.borderBottom = "1px solid red"
        return false
    }
    else{
        document.getElementById("username").style.borderBottom = "1px solid black"
        removeError("username_error")
    }

    // VALIDATING PASSWORD FIELDS
    let upper = false
    let lower = false
    let digit = false
    if (password.length == 0){
        setError("password_error", "*Password cannot be empty")
        document.getElementById("password").style.borderBottom = "1px solid red"
        return false
    }
    else{
        // Validating Minimum Length of password should be 8
        if (password.length < 8){
            document.getElementById("password").style.borderBottom = "1px solid red"
            setError("password_error", "*min 8 characters required")
            return false
        }
        else{
            // Validating passwords should contain lowercase, uppercase and digits
            for(i in password){
                if(password[i] >= 'a' && password[i] <= 'z')
                    lower = true
                if (password[i] >= 'A' && password[i] <= 'Z')
                    upper = true
                if (password[i] >= '0' && password[i] <= '9')
                    digit = true
            }

            // IF password does not contains any of these characters then we return error(Uppercase Lowercase and digit)
            if (!(upper && lower && digit)){
                setError("password_error", "*Password Should Contain LowerCase, UpperCase and Digits")
                document.getElementById("password").style.borderBottom = "1px solid red"
                return false
            }
            document.getElementById("password").style.borderBottom = "1px solid black"
            removeError("password_error")
        }
    }

    return true;
}
