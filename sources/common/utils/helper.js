export const storage = {
  get(key) {
    if (key) {
      return JSON.parse(sessionStorage.getItem(key));
    } else {
      console.warn("Session Storage GET Error：" + key);
    }
  },
  set(key, value) {
    if (key && value) {
      sessionStorage.setItem(key, JSON.stringify(value));
    } else {
      console.warn("Session Storage SET Error：" + key + value);
    }
  },
  remove(key) {
    if (key) {
      sessionStorage.removeItem(key);
    }
  },
  empty() {
    this.remove("token");
    this.remove("username");
    this.remove("permissions");
    this.remove("path");
    this.remove("name");
  }
};

export const timeConvertor = moments => {
  if (moments && moments.length == 2) {
    const start = moments[0];
    const end = moments[1];
    return start && end ? start.format("YYYY-MM-DD HH:mm:ss") + "~" + end.format("YYYY-MM-DD HH:mm:ss") : "";
  }
};