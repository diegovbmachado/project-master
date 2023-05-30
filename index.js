function validateFields() {
  const emailValid = isEmailValid();
  document.getElementById("recover-password-button").disabled = !emailValid;

  const passwordValid = isPasswordValid();
  document.getElementById("loguin-button").disabled =
    !emailValid || !passwordValid;
  // const email = document.getElementById("email").value;
  // if (!email) {
  //   document.getElementById("recover-password-button").disabled = true;
  // } else if (validateEmail(email)) {
  //   document.getElementById("recover-password-button").disabled = false;
  // } else if (validateEmail(email)) {
  //   document.getElementById("recover-password-button").disabled = true;
  // }
}
function isEmailValid() {
  const email = document.getElementById("email").value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}
function isPasswordValid() {
  const password = document.getElementById("password").value;
  if (!password) {
    return false;
  }
  return true;
}
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
