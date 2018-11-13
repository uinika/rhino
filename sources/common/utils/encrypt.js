import SHA from "sha.js";
import MD5 from "md5";
import {Base64} from "js-base64";
import {storage} from "../utils/helper";

export default {
  token: {
    set(token) {
      if (token)
        storage.set("token", token);
    },
    get() {
      const  token = storage.get("token");
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
  },
  base64Encode(string) {

  },
  base64: {
    decode(string) {
      return Base64.decode(string);
    },
    encode(string) {
      return Base64.encode(string);
    }
  }
}
