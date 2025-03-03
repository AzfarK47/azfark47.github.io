
let button = document.getElementById("button");

console.log(button);

function onclick() {
    buttonclick = buttonclick + 1;
    console.log(buttonclick);
    if (buttonclick == 3) {
        buttonclick = 0;
        document.body.style.backgroundColor = "red";
        button.style.backgroundColor = "red";
        a.style.backgroundColor = "red";
        a1.style.backgroundColor = "red";
        a2.style.backgroundColor = "red";
        a3.style.backgroundColor = "red";
        button.style.borderColor = "darkred";
        a.style.borderColor = "darkred";
        a1.style.borderColor = "darkred";
        a2.style.borderColor = "darkred";
        a3.style.borderColor = "darkred";
        button.style.color = "darkred";
        title.style.color = "darkred"
        p.style.color = "darkred"
        a.style.color = "darkred";
        a1.style.color = "darkred";
        a2.style.color = "darkred";
        a3.style.color = "darkred";
    } else if (buttonclick == 1) {
        document.body.style.backgroundColor = "white";
        button.style.backgroundColor = "white";
        a.style.backgroundColor = "white";
        a1.style.backgroundColor = "white";
        a2.style.backgroundColor = "white";
        a3.style.backgroundColor = "white";
        button.style.borderColor = "black";
        a.style.borderColor = "black";
        a1.style.borderColor = "black";
        a2.style.borderColor = "black";
        a3.style.borderColor = "black";
        button.style.color = "black";
        title.style.color = "black"
        p.style.color = "black"
        a.style.color = "black";
        a1.style.color = "black";
        a2.style.color = "black";
        a3.style.color = "black";
    }
    else {
        document.body.style.backgroundColor = "black";
        button.style.backgroundColor = "black";
        a.style.backgroundColor = "black";
        a1.style.backgroundColor = "black";
        a2.style.backgroundColor = "black";
        a3.style.backgroundColor = "black";
        button.style.borderColor = "white";
        a.style.borderColor = "white";
        a1.style.borderColor = "white";
        a2.style.borderColor = "white";
        a3.style.borderColor = "white";
        button.style.color = "white";
        title.style.color = "white"
        p.style.color = "white"
        a.style.color = "white";
        a1.style.color = "white";
        a2.style.color = "white";
        a3.style.color = "white";
    }
}

button.onclick = onclick;
let buttonclick = 1;
console.log(buttonclick)