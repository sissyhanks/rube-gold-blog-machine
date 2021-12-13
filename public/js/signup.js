const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#usernameInput').value.trim();
  const email = document.querySelector('#emailInput').value.trim();
  const password = document.querySelector('#passwordInput').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

window.onload = function(){
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
}