import Axios from "axios";

export default {
  url: window.url,
  fetch: Axios.create({
    timeout: 30000
  }),
  protocol(data, status) {
    if (
      data &&
      data.head &&
      data.head.status === status &&
      data.hasOwnProperty("head") &&
      data.hasOwnProperty("body")
    )
      return true;
    else return false;
  }
};
