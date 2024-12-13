// .getElementById(id)
// Return: element / null
let elementWithID = document.getElementById("first-div");
console.log("Element with ID:", elementWithID);
console.log("Data Type of elementWithID:", typeof elementWithID);
elementWithID.textContent = "Div 1";

// .getElementsByClassName(class)
// Return: HTMLCollection
let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Elements with Class:", elementsWithClass);
console.log(elementsWithClass[1]);
elementsWithClass[1].textContent = "Div 2";

// .getElementsByTagName()
// Return: HTMLCollection
let listItems = document.getElementsByTagName("li");
console.log("List Items:", listItems);
listItems[0].style.color = "tomato";
listItems[0].style.backgroundColor = "aqua";

// .querySelector()
// Return: First Element or Null
// Pass: #id, .class, tag
let orderedListItem = document.querySelector(".ordered-list");
console.log(orderedListItem);
orderedListItem.style.backgroundColor = "aqua";
orderedListItem.style.color = "red";

// .querySelectorAll()
// Return: NodeList
// Pass: #id, .class, tag
let headings = document.querySelectorAll("h3");
console.log(headings);
headings.forEach(function (heading) {
  heading.style.backgroundColor = "tomato";
  heading.style.color = "white";
});

// .firstElementChild and .lastElementChild
const parent = document.querySelector("#parent");
console.log(parent);
parent.firstElementChild.textContent = "First Element is Modified";
parent.lastElementChild.textContent = "Last Element is Modified";

// Siblings: .previousElementSibling and .nextElementSibling
const child3 = document.querySelector("#child3");
const child3PreviousSibling = child3.previousElementSibling;
child3PreviousSibling.style.backgroundColor = "skyblue";
const child3NextSibling = child3.nextElementSibling;
child3NextSibling.style.backgroundColor = "orange";

// Creating and Appending New Elements
const parentElementDiv = document.querySelector("#parent-element");
console.log(parentElementDiv);
let childElementDiv = document.createElement("div");
childElementDiv.textContent = "Child Element";
parentElementDiv.appendChild(childElementDiv);

// Removing an Element
const elementToBeRemoved = document.querySelector("#element-to-be-removed");
elementToBeRemoved.remove();

// Updating Element Attributes
const dayNightIcon = document.querySelector("#day-night-icon");
dayNightIcon.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// Adding Event Listeners and Manipulating Elements Styles
const darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", function () {
  const pageContainer = document.querySelector("#page-container");
  const pageModeText = document.querySelector("#page-mode-text");

  if (darkModeBtn.textContent === "Dark Mode") {
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";
    pageModeText.textContent = "Dark Mode";
    darkModeBtn.textContent = "Ligth Mode";
  } else {
    pageContainer.style.backgroundColor = "azure";
    pageContainer.style.color = "black";
    pageModeText.textContent = "Light Mode";
    darkModeBtn.textContent = "Dark Mode";
  }
});
