// SPLASH -> LOADING -> WELCOME

setTimeout(() => {
  document.getElementById("splash").classList.add("hidden");
  document.getElementById("loading").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("welcome").classList.remove("hidden");
  }, 2000);

}, 3000);


// Navigation
function goToLogin() {
  hideAll();
  document.getElementById("login").classList.remove("hidden");
}

function goToRegister() {
  hideAll();
  document.getElementById("register").classList.remove("hidden");
}

function hideAll() {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
}
