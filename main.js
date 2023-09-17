let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let name = id("name"),
  email = id("email"),
  message = id("message"),
  form = id("message-form"),

  errorMsg = classes("error"),
  failureIcon = classes("failure-icon");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    engine(name, 0, "Name cannot be blank");
    engine(email, 1, "Sorry, invalid format here");
    engine(message, 2, "Message cannot be blank");
  });

  
let engine = (id, serial, message) => {

  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.borderBottom = "1px solid #FF6F5B";
    
    // icons
    failureIcon[serial].style.opacity = "1";
  } 
  
  else {
    errorMsg[serial].innerHTML = "";
    id.style.borderBottom = "1px solid #4EE1A0";
    
    // icons
    failureIcon[serial].style.opacity = "0";
  }
}