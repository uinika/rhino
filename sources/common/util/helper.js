// export const chart = (selector = "", option = {}) => {
//   echarts.init(document.querySelector(selector)).setOption(option);
// };

export const message = (vm, type, message) => {
  vm.$message({
    type: type || "info",
    message: message || ""
  })
};

export const notify = (vm, type, message, title) => {
  vm.$notify({
    type: type || "info",
    message: message || "",
    title: title || "",
  })
};

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
  }
};
