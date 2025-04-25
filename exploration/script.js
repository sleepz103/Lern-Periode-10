console.log("hello world");

const form = document.getElementById("upload-form");
form.addEventListener("submit", HandleSubmit);

function HandleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  fetch(form.action, {
    method: "post",
    body: new FormData(form),
  });
  console.log("file sent")
}
