const container = document.getElementById("container");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

showSignup.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("active");
});

showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("active");
});

/* OPTIONAL: 3D mouse movement */
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 30;
  const y = (window.innerHeight / 2 - e.pageY) / 30;

  document.querySelector(".bg-3d").style.transform =
    `rotateY(${x}deg) rotateX(${y}deg)`;
});