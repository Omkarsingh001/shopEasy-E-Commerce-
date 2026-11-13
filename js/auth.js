const registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",(e)=>{

e.preventDefault();

const user={

name:name.value,

email:regEmail.value,

password:regPassword.value

};

if(regPassword.value!==confirmPassword.value){

showToast("Passwords do not match");

return;

}

localStorage.setItem("user",JSON.stringify(user));

showToast("Registration Successful");

setTimeout(()=>{

window.location="login.html";

},1500);

});

}

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const user=JSON.parse(localStorage.getItem("user"));

if(

email.value===user.email&&

password.value===user.password

){

showToast("Login Successful");

setTimeout(()=>{

window.location="index.html";

},1500);

}else{

showToast("Invalid Credentials");

}

});

}