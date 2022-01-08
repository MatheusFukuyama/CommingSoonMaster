function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    return (false)
}

function empatyEmail(email) {
    if(email.trim() === "") {
       return 0
    }
    return 1
}

appended = 0;
function verifyEmail(e) {
    e.preventDefault();
    
    const email = document.getElementsByClassName("email")[0];
    const errorMessage = document.getElementsByClassName("error-message")[0];
    const errorIcon = document.getElementsByClassName("error-icon")[0];

    let message
    if(appended) {
      message = document.getElementsByTagName("span")[1]
    }
    else {
      message = document.createElement("span")
      errorMessage.classList.add("error-format")
      message.classList.add("message")
    }
      

    if(!empatyEmail(email.value)) {
      email.classList.add("error")
      message.innerHTML = "Whoops! It looks like you forgot to add your email"
      if(!appended){
        errorIcon.style.display = "block"
        errorMessage.appendChild(message)
        email.style.border = "2px solid var(--clr-primary-700)"
      }
      appended = 1
    }
    else if(!ValidateEmail(email.value)) {
      email.classList.add("error")
      message.innerHTML = "Please provide a valid email address"
      if(!appended){
        errorIcon.style.display = "block"
        errorMessage.appendChild(message)
        email.style.border = "2px solid var(--clr-primary-700)"
      }
        appended = 1
    }
    else{
        email.classList.remove("error")
        errorMessage.innerHTML = ""
        errorIcon.style.display = "none"
        email.style.border = "1px solid var(--clr-primary-600)"
        appended = 0
    }
}