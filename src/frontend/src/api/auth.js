// 로그인, 회원 가입, (ex) 회원 탈퇴
import { instance } from './index';

// 회원가입 API
function registerUser(userData) {
  return instance.post('api/join', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

// 아이디중복체크 API
function idChkUser(userData) {
  return instance.get('api/idChk/?username=' + userData);
}

function nickChkUser(userData) {
  return instance.get('api/nickChk/?nickname=' + userData);
}

function Oauth2Google(userData) {
  return instance.get('login/oauth2/authorizaion/google');
}

export { registerUser, loginUser, idChkUser, nickChkUser };
