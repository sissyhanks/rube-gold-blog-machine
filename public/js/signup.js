const signupFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector("#usernameInput").value.trim();
  const email = document.querySelector("#emailInput").value.trim();
  const password = document.querySelector("#passwordInput").value.trim();

  if (user_name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ user_name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
