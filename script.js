const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const passwordError = document.querySelector(".password-error");

document.addEventListener("input", () => {
    console.log(passwordInput.value);
    console.log(confirmPasswordInput.value);
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordError.textContent = "Passwords do not match!";
    }
    else {
        passwordError.textContent = "";
    }
});