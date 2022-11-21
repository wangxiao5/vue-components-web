//取token
function getToken() {
  return sessionStorage.getItem("token");
}
//存token
function setToken(token) {
  sessionStorage.setItem("token", token);
}
//删token
function removeToken() {
  sessionStorage.removeItem("token");
}

export { getToken, setToken, removeToken };
