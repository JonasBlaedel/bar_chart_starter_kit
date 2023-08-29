let myArray = [];
myArray.lenght = 20;

for (let i = 0; i < 20; i++) {
  myArray.push(Math.floor(Math.random() * 100) + 1);
}

const list = document.querySelector("ul");

function heights(height) {
  const li = document.createElement("li");
  li.style.setProperty("--height", height);
  list.appendChild(li);
}

myArray.forEach((height, index) => {
  setTimeout(() => {
    heights(height);
  }, 1000 * index);
});
