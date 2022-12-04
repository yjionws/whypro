const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const todo = document.querySelector("#todobar")
 
const HIDDEN_CLASSNAME = "hidden";
const USRERNAME_KEY = "username";
 
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value
    localStorage.setItem(USRERNAME_KEY, username)
    paintGreeting (username)
    todo.classList.remove(HIDDEN_CLASSNAME)
 
}
 
function paintGreeting (username){
    greeting.innerText = `hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}
 
 
const savedUsername = localStorage.getItem(USRERNAME_KEY);
 
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit)
} else {
    paintGreeting (savedUsername)
    todo.classList.remove(HIDDEN_CLASSNAME)
}