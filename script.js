const pfp = document.getElementById("pfp");
const glow = document.querySelector(".glow");

let rotation = 0;
let intensity = 0;

pfp.addEventListener("click", () => {
    rotation += 360;
    pfp.style.transform = "rotate(" + rotation + "deg)";

    intensity += 1;
})