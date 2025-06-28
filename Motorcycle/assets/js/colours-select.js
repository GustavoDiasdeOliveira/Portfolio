let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let blackBtn = document.getElementById("black");
let bike = document.getElementById("bike");
let imageDiv = document.querySelector(".image");

redBtn.onclick = function () {
    bike.style.backgroundImage = "url(images/BMW1.png)";
    imageDiv.style.display = "none"; // Esconde a div
}

blueBtn.onclick = function () {
    bike.style.backgroundImage = "url(images/BMW2.png)";
    imageDiv.style.display = "none"; // Esconde a div
}

blackBtn.onclick = function () {
    bike.style.backgroundImage = "url(images/BMW3.png)";
    imageDiv.style.display = "none"; // Esconde a div
}