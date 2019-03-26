export const getToken = () => localStorage.getItem("jwt-token");
export const saveToken = token => localStorage.setItem("jwt-token", token);
export const removeToken = () => localStorage.removeItem("jwt-token");

export const getOwnInfo = () => {
  try {
    const token = getToken();
    let payload;
    if (token) {
      payload = token.split(".")[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};

export const parseToken = token => {
  try {
    let payload;
    payload = token.split(".")[1];
    payload = window.atob(payload);
    return JSON.parse(payload);
  } catch (e) {
    console.log(e);
  }
};

export const latencyConverter = timestamp => {
  if (timestamp > 86400000) {
    return "";
  } else if (timestamp > 3600000) {
    return ` ${Math.ceil(timestamp / 3600000)} hr ago`;
  } else {
    return ` ${Math.ceil(timestamp / 60000)} min ago`;
  }
};

export const normalizeSweets = sweets => {
  const normalizedSweets = {};
  sweets.forEach(sweet => {
    normalizedSweets[sweet._id] = sweet;
  });
  return normalizedSweets;
};

export const selectSweetIds = sweets => {
  return sweets.map(sweet => sweet._id);
};
