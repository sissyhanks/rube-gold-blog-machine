//varables will be 
let blogroll = true;
let login = false;
let signup = false;

const loginButton = document.querySelector("#login");
const signupButton = document.querySelector("#signup");
const blogrollButton = document.querySelector("#blogroll");

loginButton.addEventListener("click", function () {
  login = true;
  blogroll = false;
  signup = false;
  console.log(login, blogroll, signup);
  window.location='login';
 });

signupButton.addEventListener("click", function () {
  login = false;
  blogroll = false;
  signup = true;
  console.log(login, blogroll, signup);
  window.location='signup';
 });

blogrollButton.addEventListener("click", function () {
  login = false;
  blogroll = true;
  signup = false;
  console.log(login, blogroll, signup);
  window.location='/';
 });
