function validateEmail(email) {
  var re = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  var regExp = /^[a-zA-Z0-9]{8,16}$/;
  return regExp.test(password);
}

function validateNickname(nickname) {
  var regExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/;
  return regExp.test(nickname);
}

export { validateEmail, validatePassword, validateNickname };
