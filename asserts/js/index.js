document.addEventListener("DOMContentLoaded", function (e) {
  const eye = document.querySelector(".signin--form__icon");
  const pathEye = "./asserts/images/eye.svg";
  const pathEyeClose = "./asserts/images/eye-close.svg";
  eye.addEventListener("click", function (e) {
    const inputPassword = e.currentTarget.previousElementSibling;
    if (e.currentTarget.getAttribute("src") === pathEye) {
      inputPassword.setAttribute("type", "text");
      e.currentTarget.setAttribute("src", pathEyeClose);
    } else {
      inputPassword.setAttribute("type", "password");
      e.currentTarget.setAttribute("src", pathEye);
    }
  });
});
