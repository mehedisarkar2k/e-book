const lists = document.querySelector(".list-container");
const inputBTN = document.querySelector(".input-btn");
const searchFiled = document.querySelector('input[type="text"]');

// delete a items
lists.addEventListener("click", (e) => {
  const item = e.target;
  if (item.className.includes("delete-btn")) {
    lists.removeChild(item.parentElement);
  }
});

// add new item
inputBTN.addEventListener("click", (e) => {
  const inputField = e.target.parentElement.querySelector('input[type="text"]');
  const container = document.querySelector(".list-container");

  // create new item
  if (inputField.value.trim() != "") {
    const div = document.createElement("div");
    div.classList.add("list-item");
    const p = document.createElement("p");
    const btn = document.createElement("button");
    btn.className = "btn delete-btn";

    p.innerText = inputField.value;
    btn.innerText = "delete";

    div.appendChild(p);
    div.appendChild(btn);

    container.appendChild(div);
  } else {
    alert("You can't add empty name");
  }
  inputField.value = "";
});

// search items
searchFiled.addEventListener("keyup", (e) => {
  const keyword = e.target.value.toLowerCase().trim();
  const item = lists.querySelectorAll(".list-item p");

  Array.from(item).forEach((item) => {
    const nameOfBook = item.innerText.toLowerCase();
    if (nameOfBook.indexOf(keyword) != -1) {
      item.parentElement.style.display = "flex";
    } else {
      item.parentElement.style.display = "none";
    }
  });
});
