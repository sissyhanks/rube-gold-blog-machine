const loginButton = document.querySelector("#login");
const signupButton = document.querySelector("#signup");
const blogrollButton = document.querySelector("#blogroll");

loginButton.addEventListener("click", function () {
  window.location='login';
 });

signupButton.addEventListener("click", function () {
  window.location='signup';
 });

blogrollButton.addEventListener("click", function () {
  window.location='/';
 });
