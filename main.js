let userName = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let form = document.getElementById('message-form');
let userNameErrorIcon = document.getElementById('username-error-icon');
let emailErrorIcon = document.getElementById('email-error-icon');
let messageErrorIcon = document.getElementById('message-error-icon');
let usernameError = document.getElementById('username-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function userNameValidation(){
  if(userName.value.trim() === '') {
    usernameError.style.visibility = 'visible';
    userNameErrorIcon.style.visibility = 'visible';
    userName.style.borderBottomColor = '#FF6F5B';
    return false;
  } else {
    userName.style.borderBottomColor = '#4EE1A0';
    return true;
  }
}

function emailValidation(){
  if(!email.value.match(mailformat) || email.value.trim() === ''){
    emailError.style.visibility = 'visible';
    emailErrorIcon.style.visibility = 'visible';
    email.style.borderBottomColor = '#FF6F5B';
    return false;
  } else {
    email.style.borderBottomColor = '#4EE1A0';
    return true;
  }
}

function messageValidation (){
  if (message.value.trim() === '') {
    messageError.style.visibility = 'visible';
    messageErrorIcon.style.visibility = 'visible';
    message.style.borderBottomColor = '#FF6F5B';
    return false;
  } else {
    message.style.borderBottomColor = '#4EE1A0';
    return true;
  }
};


form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userCheck = userNameValidation();
  let emailCheck = emailValidation();
  let messageCheck = messageValidation()

  if (userCheck){
    usernameError.style.visibility = 'hidden';
    userNameErrorIcon.style.visibility = 'hidden';
  }

  if (emailCheck){
    emailError.style.visibility = 'hidden';
    emailErrorIcon.style.visibility = 'hidden';
  }

  if (messageCheck){
    messageError.style.visibility = 'hidden';
    messageErrorIcon.style.visibility = 'hidden';
  }

  if (userCheck && emailCheck && messageCheck){
    form.submit();
  }
});

