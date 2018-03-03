export function getToken() {
  return localStorage.getItem("jwt-token");
}

export function saveToken(token) {
  localStorage.setItem("jwt-token", token);
}

export function removeToken() {
  localStorage.removeItem("jwt-token");
}

export function getUserInfo() {
  const token = getToken();
  let payload;
  if (token) {
    payload = token.split(".")[1];
    payload = window.atob(payload);
    return JSON.parse(payload);
  } else {
    return null;
  }
}

export function parseToken(token) {
  let payload;
  payload = token.split(".")[1];
  payload = window.atob(payload);
  return JSON.parse(payload);
}

export function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function latencyConverter(timestamp) {
  if (timestamp > 86400000) {
    return "";
  } else if (timestamp > 3600000) {
    return ` ${Math.ceil(timestamp / 3600000)} hr`;
  } else {
    return ` ${Math.ceil(timestamp / 60000)} min`;
  }
}

export function normalizeSweets(sweets) {
  const normalizedSweets = {};
  sweets.forEach(sweet => {
    normalizedSweets[sweet._id] = sweet;
  });
  return normalizedSweets;
}

export function getSweetIds(sweets) {
  return sweets.map(sweet => sweet._id);
}
