const btn = document.querySelector("button");
const userName = document.getElementById("username");
const password = document.querySelector("#password");

const login = {
  userName: "itzabdulfatai",
  password: "itzitz"
}

btn.addEventListener("click", function () {
  if (userName.value !== "" && password.value !== "") {
    if (userName.value === login.userName && password.value === login.password) {
      alert("welcome!");
      window.location.href = "home";
    } else if (userName.value !== login.userName) {
      alert("invalid username");
      userName.value = "";
      password.value = "";
      
    } else if (password.value !== login.password) {
      alert("wrong password!");
      userName.value = "";
      password.value = "";
    }
  } else if (userName.value == "" && password.value == "") {
    alert("kindly input login details");
  } else if (userName.value === "" || password.value === "") {
    alert("invalid username or password");
  }
});
