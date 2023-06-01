function onChangeEmail() {
  toggleEmaiErrors();
  toggleButtonsDisable();
}
function onChangePassword() {
  togglePasswordErrors();
  toggleButtonsDisable();
}

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      window.location.href = "pages/home/home.html";
    })
    .catch((error) => {
      console.log("error", error);
    });
}
function register() {
  window.location.href = "pages/register/register.html";
}

function isEmailValid() {
  const email = from.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}
function toggleEmaiErrors() {
  const email = from.email().value;
  from.emailRequiredError().style.display = email ? "none" : "block";
  //oque esta acima, faz exatamente oque esta a baixo, genial!
  // if (!email) {
  //   from.emailRequiredError().style.display = "block";
  // } else {
  //   from.emailRequiredError().style.display = "none";
  // }
  from.emailInvalidError().style.display = validateEmail(email)
    ? "none"
    : "block";
  //oque esta acima, faz exatamente oque esta a baixo, genial!
  // if (validateEmail(email)) {
  //   from.emailInvalidError().style.display = "none";
  // } else {
  //   from.emailInvalidError().style.display = "block";
  // }
}

function togglePasswordErrors() {
  const password = from.password().value;

  from.passwordRequiredError().style.display = password ? "none" : "block";
  // if (!password) {
  //   from.passwordRequiredError().style.display = "block";
  // } else {
  //   from.passwordRequiredError().style.display = "none";
  // }
}
function toggleButtonsDisable() {
  const emailValid = isEmailValid();
  from.recoverPassword().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  from.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
  const password = from.password().value;
  if (!password) {
    return false;
  }
  return true;
}

const from = {
  email: () => document.getElementById("email"),
  password: () => document.getElementById("password"),
  passwordRequiredError: () =>
    document.getElementById("password-required-error"),
  loginButton: () => document.getElementById("login-button"),
  recoverPassword: () => document.getElementById("recover-password-button"),
  emailInvalidError: () => document.getElementById("email-invalid-error"),
  emailRequiredError: () => document.getElementById("email-required-error"),
};
