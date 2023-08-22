//Esercizio 1
const p = document.getElementsByTagName("p")[0];
const textInput = document.getElementsByTagName("input")[0];
const btns = document.getElementsByTagName("button");

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("userName")) {
    p.innerText = `${localStorage.getItem("userName")}`;
  }
});

btns[0].addEventListener("click", (event) => {
  const name = textInput.value;
  localStorage.setItem("userName", name);
  p.innerText = name;
});

btns[1].addEventListener("click", (event) => {
  if (localStorage.getItem("userName")) {
    localStorage.removeItem("userName");
    p.innerText = "";
  }
});

//Esercizio 2
const h3 = document.getElementsByTagName("h3")[0];
let second = parseInt(sessionStorage.getItem("passedTime")) || 0;
const timer = () => {
  second++;
  h3.innerText = `${second}`;
  sessionStorage.setItem("passedTime", second);
};

let clock = setInterval(timer, 1000);

window.addEventListener("DOMContentLoaded", () => {
  h3.innerText = `${second}`;
  if (sessionStorage.getItem("passedTime")) {
    h3.innerText = `${sessionStorage.getItem("passedTime")}`;
  }
  clock();
});
