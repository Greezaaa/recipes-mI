// api key
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "07095ace73msh43546711c766697p17df5ejsn732e528e3e89",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};
//  get path param value
let url_string = window.location;
let url = new URL(url_string);
// let paramTitle = url.searchParams.get("title");
// let paramBio = url.searchParams.get("id");
// switcher
let toggle = document.querySelector("#container");
let body = document.querySelector("body");
//menu
let path = window.location.pathname;
let page = path.split("/").pop();
let home_link = document.querySelector(".home_link");
let cats_link = document.querySelector(".cats_link");
if (page === "index.html" || page === "") {
  home_link.classList.toggle("active");
} else if (page === "category.html") {
  cats_link.classList.toggle("active");
}
home_link.addEventListener("click", () => {
  window.location.href = "./index.html";
});
cats_link.addEventListener("click", () => {
  window.location.href = "./category.html";
});

let heroClose = document.querySelector(".heroClose");
heroClose.addEventListener("click", () => {
  let msgWindow = document.querySelector(".welcome");
  localStorage.setItem("hero", "closed");
  msgWindow.classList.add("flyLeft");

  setTimeout(() => {
    msgWindow.style.display = "none";
  }, 400);
});
// local storage
let user_logout = document.querySelector(".user_logout");
user_logout.onclick = () => {
  localStorage.setItem("msg", "See ya soon!");
  msgFromLS();
  localStorage.setItem("isLoged", "");
  location.href = "/";
};
window.ready = theme(localStorage.getItem("theme"));
window.ready = msgFromLS(localStorage.getItem("msg").value);
window.ready = loged(localStorage.getItem("isLoged"));
window.ready = hero(localStorage.getItem("hero"));

function hero(hero) {
  if (hero == "closed") {
    document.querySelector(".welcome").style.display = "none";
  }
}
function theme(theme) {
  if (theme == "dark") {
    toggle.classList.toggle("active");
    body.classList.toggle("active");
  }
}
function loged(isLoged) {
  if (isLoged == "true") {
    user_logout.style.display = "block";
  } else {
    user_logout.style.display = "none";
  }
}
toggle.onclick = () => {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  if (body.classList.value == "active") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
  }
};
function msgFromLS(msg) {
  msg = localStorage.msg;
  let msgAlert = document.querySelector(".msgAlert");
  msgAlert.style.display = "block";
  msgAlert.innerHTML = msg;
  msgAlert.classList.toggle("show");
  setTimeout(function () {
    msgAlert.classList.toggle("show");
    localStorage.setItem("msg", "");
    msgAlert.innerHTML = "";
  }, 5000);
}
