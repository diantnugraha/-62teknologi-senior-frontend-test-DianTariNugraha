import axios from "axios";

let auth = localStorage.setItem(
  "token",
  "MwVuTl_SSdFSCGt8fORKb0JvkfqxhjaLlXfapzsFaQC7toFoCYbN2NuIyxoBb6Jxuw7HDq1Y58h7mYXy8OaU4ox4Y9cuuscygZQPI3P8LMP7AlR1q0zqWRlriHfOY3Yx"
);

let token =
  "CPZVtyL2HoS9jNLRB8vbSmbQyJlSUB2T6b-Laejh99qSwC5do1UrK-G_jXjSqgWYiBW5Zqs09QaYBCF0C-erPEaGIA28bXmQqiIWVMSzuX7mDiAD9sSVhRUHg1zJY3Yx";

const instance = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer e30noR3iP6weI3SK5Ii5ubuGwD54jYqLxu62hga9pLXmz98AmnON_WbCw3B8BUy0Qq_iGHXgNs_ijLkzfdLgtUp0CQYNs_nxRWlkbEm9UIJsJ4YT-rjP5UW_U6rOY3Yx",
  },
});

export default instance;
