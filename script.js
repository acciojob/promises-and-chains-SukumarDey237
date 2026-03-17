// import "./styles.css";
//your JS code here. If required.
function handelSubmit(event) {
  event.preventDefault();
  console.clear()
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
	if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (age > 18) {
        res(`Welcome, ${name} You can vote.`);
      } else {
        rej(`Oh sorry ${name} You aren't old enough.`);
      }
    }, 4000);
  });
  promise.then((value) => alert(value)).catch((err)=>alert(err));
}

document.getElementById("form").addEventListener("submit", handelSubmit);

