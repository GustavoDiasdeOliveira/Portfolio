var mainListDiv = document.getElementById("mainListDiv");
mediaButton = document.getElementById('mediaButton');

mediaButton.onclick = function () {
    mainListDiv.classList.toggle('show_list');
    mediaButton.classList.toggle('active');
}