import SHA from "sha.js";
import MD5 from "md5";

export default {
  token: {
    set(token) {
      if (token)
        sessionStorage.setItem("token", token);
    },
    get() {
      const token = sessionStorage.getItem("token")
      return token ? token : undefined;
    },
    remove() {
      sessionStorage.removeItem("token");
    }
  },
  sha(string) {
    return SHA("sha256").update(string, "utf8").digest("hex");
  },
  md5(string) {
    return MD5(string);
  }
}
