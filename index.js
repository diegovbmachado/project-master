firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location.href = "pages/home/home.html";
  }
});
function onChangeEmail() {
  toggleEmaiErrors();
  toggleButtonsDisable();
}
function onChangePassword() {
  togglePasswordErrors();
  toggleButtonsDisable();
}

function login() {
  showLoading();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      hideLoading();
      window.location.href = "pages/home/home.html";
    })
    .catch((error) => {
      hideLoading();
      console.log("error", error);
      alert(getErrorMessage(error));
    });
}

function getErrorMessage(error) {
  if (error.code == "auth/wrong-password") {
    return "Usuário não encontrado";
  }
  if (error.code == "auth/user-not-found") {
    return "Senha inválida";
  }
  return error.message;
}

function register() {
  window.location.href = "pages/register/register.html";
}

function recoverPassword() {
  showLoading();
  firebase
    .auth()
    .sendPasswordResetEmail(form.email().value)
    .then(() => {
      hideLoading();
      alert("Email enviado com sucesso!");
    })
    .catch((error) => {
      hideLoading();
      alert(getErrorMessage(error));
    });
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}
function toggleEmaiErrors() {
  const email = form.email().value;
  form.emailRequiredError().style.display = email ? "none" : "block";
  //oque esta acima, faz exatamente oque esta a baixo, genial!
  // if (!email) {
  //   form.emailRequiredError().style.display = "block";
  // } else {
  //   form.emailRequiredError().style.display = "none";
  // }
  form.emailInvalidError().style.display = validateEmail(email)
    ? "none"
    : "block";
  //oque esta acima, faz exatamente oque esta a baixo, genial!
  // if (validateEmail(email)) {
  //   form.emailInvalidError().style.display = "none";
  // } else {
  //   form.emailInvalidError().style.display = "block";
  // }
}

function togglePasswordErrors() {
  const password = form.password().value;

  form.passwordRequiredError().style.display = password ? "none" : "block";
  // if (!password) {
  //   form.passwordRequiredError().style.display = "block";
  // } else {
  //   form.passwordRequiredError().style.display = "none";
  // }
}
function toggleButtonsDisable() {
  const emailValid = isEmailValid();
  form.recoverPassword().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
  const password = form.password().value;
  if (!password) {
    return false;
  }
  return true;
}

const form = {
  email: () => document.getElementById("email"),
  password: () => document.getElementById("password"),
  passwordRequiredError: () =>
    document.getElementById("password-required-error"),
  loginButton: () => document.getElementById("login-button"),
  recoverPassword: () => document.getElementById("recover-password-button"),
  emailInvalidError: () => document.getElementById("email-invalid-error"),
  emailRequiredError: () => document.getElementById("email-required-error"),
};
