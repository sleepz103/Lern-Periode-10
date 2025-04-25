console.log("hello world");

const form = document.getElementById("upload-form");
form.addEventListener("submit", HandleSubmit);

function HandleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  fetch(form.action, {
    method: "post",
    body: new FormData(form),
  })
    .then((res) => res.text())
    .then((data) => {
      console.log("Server response:", data);
    })
    .catch((err) => {
      console.error("Upload failed:", err);
    });

  console.log("file sent");

  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];

  if (!file) {
    console.log("No file selected.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    const content = e.target.result;
    console.log("File content:", content);

    const pre = document.createElement("pre");
    pre.textContent = content;
    document.body.appendChild(pre);
  };

  reader.onerror = function (e) {
    console.error("Error reading file:", e);
  };

  reader.readAsText(file);
}
