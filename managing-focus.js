const hello = document.getElementById("hello");
const revert = document.getElementById("revert");
hello.addEventListener("click", () => {
  console.log("clicked");
  revert.focus();
});
