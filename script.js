const container1 = document.getElementById("container-1");
const container2 = document.getElementById("container-2");

container1.addEventListener("click", event => {
  // Flip the container over
  flipDiv(event.target);
});

container2.addEventListener("click", event => {
  // Flip the container over
  flipDiv(event.target);
});

function flipDiv(clickedDiv) {
  let parent = clickedDiv.parentElement;
  if (parent.className === "front") {
    clickedDiv.className = "hide";
    clickedDiv.style.transform = "rotateY(90deg)";
    setTimeout(function () {
      parent.lastElementChild.className = "show";
      parent.lastElementChild.style.transform = "rotateY(0deg)";
      parent.className = "back";
    }, 250);
  } else if (parent.className === "back") {
    clickedDiv.className = "hide";
    clickedDiv.style.transform = "rotateY(90deg)";
    setTimeout(function () {
      parent.firstElementChild.className = "show";
      parent.firstElementChild.style.transform = "rotateY(0deg)";
      parent.className = "front";
    }, 250);
  }
}

