//authentication at login

    let formSubmit = document.getElementById('login-form'),
        email = document.getElementById('email'),
        password1 = document.getElementById('password');


    //function to verify if the user has entered a valid email address

    function emailValidation(field){
        let emailRegex = /^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,3})+$/; //refers to regular expressions

        if(!email.value.match(emailRegex)){
            email.nextElementSibling.innerHTML='please enter a valid email address';
            field.preventDefault();
            return false;

        }else{
            email.nextElementSibling.innerHTML='';
            return true;
        }
    }

    //function to verify if the user has entered a valid email address
    function matchPassword(field) {  
        let pswdRegex = /^[a-z0-9]+$/i;
        if(pswdRegex)  
        if(!(password1.value.match(pswdRegex))){
            password1.nextElementSibling.innerHTML='password should contain numbers or letters only';
            field.preventDefault();

            return false;
        }else if(!(password1.value.lenth >= 8)){
            password1.nextElementSibling.innerHTML='password should be greater or to eight characters';
            field.preventDefault();
        
            return false;

        }else{

            password1.nextElementSibling.innerHTML='';
            return true;
        }
    }

    function validateFunction(e) {
    //call to the function required taking in event e and an element to verify
        required(email,e);
        required(password1,e);

        //call to email validation function
        emailValidation(e);

        //call to password validation function
        passwordValidation(e);

        return true;
    }

    //fucntion to validate that if a field is empty, we display some error message and block sbmitting
    function required(field, event){
        if(field.value ===''){
            field.nextElementSibling.innerHTML="this field is required"; //refering the span block
            event.preventDefault(); //prevent form from submitting by default
            return false;
        }else{
            field.nextElementSibling.innerHTML="";
            return true;
        }
    }

    formSubmit.addEventListener('submit',validateFunction)


//authentication at sign up

    let Submit = document.getElementById('signup-form'),
        fullName = document.getElementById('full-Name'),
        register_email = document.getElementById('email-field'),
        passwor2 = document.getElementById('password-field');
        password3 = document.getElementById('pswd-verify');

    //function to verify if the user has entered a valid email address
    function emailValidation(field){
        let emailRegex = /^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,3})+$/; //refers to regular expressions

        if(!register_email.value.match(emailRegex)){
            register_email.nextElementSibling.innerHTML='please enter a valid email address';
            field.preventDefault();
            return false;

        }else{

            register_email.nextElementSibling.innerHTML='';
            return true;
        }
    }


    //function to verify if the user has entered a valid email address
    function passwordValidation(field){
        let pwdRegex = /^[a-z0-9]+$/i;
        
        if(!(password2.value.match(pwdRegex))){
            password2.nextElementSibling.innerHTML='password should contain numbers or letters only';
            field.preventDefault();

            return false;
        }else if(!(password2.value.length >= 8)){
            password2.nextElementSibling.innerHTML='password should be greater or to eight characters';
            field.preventDefault();
        
            return false;

        }else if(password2.value!=password3.value){
            password3.nextElementSibling.innerHTML='passwords do not match';
            field.preventDefault();
            return false;
        }
        else{

            password.nextElementSibling.innerHTML='';
            return true;
        }
    }

    function validateFunction(e) {
    //call to the function required taking in event e and an element to verify
        required(register_email,e);
        required(password,e);
        required(fullName,e);
        
        //call to email validation function
        emailValidation(e);

        //call to password validation function
        passwordValidation(e)

        return true;
    }

    //fucntion to validate that if a field is empty, we display some error message and block sbmitting
    function required(field, event){
        if(field.value ===''){
            field.nextElementSibling.innerHTML="this field is required"; //refering the span block
            event.preventDefault(); //prevent form from submitting by default
            return false;
        }else{
            field.nextElementSibling.innerHTML="";
            return true;
        }

    }
    Submit.addEventListener('submit',validateFunction)
