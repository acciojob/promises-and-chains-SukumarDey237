// import "./styles.css";
//your JS code here. If required.
function handelSubmit(event) {
  event.preventDefault();
  console.clear()
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let msg = "";
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (age > 18) {
        msg = `Welcome, ${name} You can vote.`;
      } else {
        msg = `Oh sorry ${name} You aren't old enough.`;
      }
      res(msg);
    }, 4000);
  });
  promise.then((value) => alert(value));
}

document.getElementById("form").addEventListener("submit", handelSubmit);
