let kAlert = document.getElementById('button');
let warning = document.getElementById('button2');
kAlert.addEventListener("click", kAlert1);
kAlert.addEventListener("click", kAlert2);

button2.onclick = visible;

function kAlert1() {
    alert("The Allettare Chateau will be mine,");
}

function kAlert2() {
    alert("And all of you as well.");
}

function visible() {
    warning.style.color = "rgb(255, 0, 191)";
    kAlert.style.color = "black";
    kAlert.style.borderColor = "black";
    alert("In a short period of time, your palace will fall apart, along with all of it's remnants, all of your precious weaponry, and the heart of magic that is treasured within it -  you will always know who's going after you, and that glorious figure is...");
}