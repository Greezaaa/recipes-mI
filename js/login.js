const signupForm = document.querySelector(".signupForm");
const signinForm = document.querySelector(".loginForm");
const signUpBtn = document.querySelector("#s");
const signInBtn = document.querySelector("#l");
const tosignupform = document.querySelector(".tosignupform");
const login = document.querySelector(".login");
const user_link = document.querySelector(".user_link");
user_link.addEventListener("click", () => {
  login.classList.toggle("active");
});
tosignupform.addEventListener("click", () => {
  signupForm.classList.add("active");
  signinForm.classList.remove("active");
});
const tosigninform = document.querySelector(".tosigninform");
tosigninform.addEventListener("click", () => {
  signinForm.classList.add("active");
  signupForm.classList.remove("active");
});
let msgAlert = document.querySelector(".msgAlert");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fname = document.querySelector("#sfname").value;
  let lname = document.querySelector("#slname").value;
  let email = document.querySelector("#semail").value;
  let pwd = document.querySelector("#spwd").value;
  signUp(e, fname, lname, email, pwd);
});
signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let pwd = document.querySelector("#pwd").value;
  signIn(e, email, pwd);
});
const signUp = (e, fname, lname, email, pwd) => {
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.fname.toLowerCase() == fname.toLowerCase() &&
        data.lname.toLowerCase() == lname.toLowerCase()
    );

  if (!exist) {
    formData.push({ fname, lname, email, pwd });
    localStorage.setItem("formData", JSON.stringify(formData));
    document.querySelector(".signupForm").reset();
    document.querySelector("#email").focus();
    localStorage.setItem("msg", "New account created");
    msgFromLS();
    signinForm.classList.add("active");
    signupForm.classList.remove("active");
  } else {
    localStorage.setItem("msg", "Account allready exist, pls sigin");
    msgFromLS();
    signupForm.classList.add("active");
    signinForm.classList.remove("active");
  }
  e.preventDefault();
};
function signIn(e, email, pwd) {
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd
    );
  if (!exist) {
    localStorage.setItem("msg", "Error, username or password do not match");
    msgFromLS();
  } else {
    localStorage.setItem("msg", "Login success");
    msgFromLS();
    localStorage.setItem("isLoged", true);
    location.href = "/";
  }
  e.preventDefault();
}
function msgFromLS() {
  let msg = localStorage.msg;
  msgAlert.innerHTML = msg;
  msgAlert.classList.toggle("show");
  setTimeout(function () {
    msgAlert.classList.toggle("show");
    localStorage.setItem("msg", "");
    msgAlert.innerHTML = "";
  }, 5000);
}
