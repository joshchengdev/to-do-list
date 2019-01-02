//create new item when + button is clicked
function addItem() {
  let li = document.createElement("li");
  let inputValue = document.querySelector("#user-input").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  let ul = document.getElementById("ul");
  if (inputValue === "") {
    alert("You must enter something!");
  } else {
    ul.appendChild(li);
  }
  //add x to every item
  let delBtn = document.createElement("button");
  let del = document.createTextNode("X");
  delBtn.appendChild(del);
  li.appendChild(delBtn);
  document.querySelector("#user-input").value = "";

  //display none when clicked X
  delBtn.addEventListener("click", delItem);
  function delItem() {
    let div = delBtn.parentElement;
    div.style.display = "none";
  }
}

//toggle to checked class when item is clicked
let list = document.querySelector("ul");
list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});

let enterBtn = document.getElementById("enter");
enterBtn.addEventListener("click", addItem);
