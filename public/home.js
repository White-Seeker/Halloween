var door1 = document.querySelector("#door1");
var door2 = document.querySelector("#door2");
var door3 = document.querySelector("#door3");
var button = document.querySelector("button");

var arr = ["boo.png", "candies.png", "devil.png"];
x = Math.floor(Math.random() * 3);
y = Math.floor(Math.random() * 3);
z = Math.floor(Math.random() * 3);

door1.addEventListener("click", function() {
    document.getElementById("door1").src = arr[x];
    body.style.backgroundColor = "lightseagreen";
});

door2.addEventListener("click", function() {
    document.getElementById("door2").src = arr[y];
    body.style.backgroundColor = "lightseagreen";
});

door3.addEventListener("click", function() {
    document.getElementById("door3").src = arr[z];
    body.style.backgroundColor = "lightseagreen";
});

button.addEventListener("click", function() {
    location.reload()
});