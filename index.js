

const changeFont = document.getElementById("TXT");
changeFont.style.fontSize = "30px"

document.querySelector("p").style.fontSize = "20px";

const newItem = document.createElement("h1")
newItem.innerText = "DateMyAge"
document.body.appendChild(newItem)

document.querySelector("h1").innerHTML="Connecting 60's Dating Site"

const form = document.getElementById("signup-form")
const username = form.elements["username"]
const email = form.elements["email"]
const password = form.elements["password"]
const age = form.elements["age"]


function validateForm(e) {
e.preventDefault()
  const usernameInput = username.value
 const passwordInput = password.value
 const emailInput = email.value
 const ageInput = age.value
  
  if (usernameInput === "") {
    alert("Name must be filled out");
    return false;
  }
  if (passwordInput === "") {
    alert("Password must be filled out");
    return false;
  }
  if (emailInput === "") {
    alert("Email must be filled out");
    return false;
  }
  if (ageInput === "") {
    alert("Age must be filled out");
    return false;
  }

  
}


