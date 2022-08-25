//نسخه بدون الكلام في المربع
// let before = document.getElementById("before");
// let inside = document.getElementById("inside");
// let after = document.getElementById("after");
// let img = document.getElementById("img");
// let container = document.getElementById("container");
// console.log(before);
// console.log(inside);
// console.log(after);
// console.log(img);
// console.log(container);

// after.onclick = function () {
//     container.after(img);
// }

// before.onclick = function () {
//     container.before(img);
// }

// inside.onclick = function () {
//     container.append(img);
// }

// window.onload = function () {
//     container.append(img);
// }



//نسخه و الكلام في المربع
let before = document.getElementById("before");
let inside = document.getElementById("inside");
let after = document.getElementById("after");
let img = document.getElementById("img");
let container = document.getElementById("container");
console.log(before);
console.log(inside);
console.log(after);
console.log(img);
console.log(container);

after.onclick = function () {
    container.after(img);
    container.innerHTML = "the picture is after the box"
}

before.onclick = function () {
    container.before(img);
    container.innerHTML = "the picture is before the box"
}

inside.onclick = function () {
    container.innerHTML = ""
    container.append(img);

}

window.onload = function () {
    container.append(img);
}

