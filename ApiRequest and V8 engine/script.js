/*
XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh.
*/
const reqURL = `https://api.github.com/users/code-azeemahmad`;
const xhr = new XMLHttpRequest();
xhr.open(`GET`, reqURL);
xhr.onreadystatechange = function() {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const user = JSON.parse(this.response); // res from url is most of the time string
    // console.log(typeof user);
    console.log(user.login);
  }
}
xhr.send();

// https://github.com/v8/v8/blob/main/src/d8/d8-console.cc