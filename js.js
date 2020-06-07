function changeImage() {
img = document.getElementById("door")
img.src = img.src.replace("images/door.png", "images/opendoor.png");
}

function originaldoor() {
img = document.getElementById("door")
img.src = img.src.replace("images/opendoor.png" , "images/door.png");
}
