
function loading() {
    for(var i = 1; i <= 4; i++) {
        document.getElementById("p"+i).style.display = "none";
    }
    console.log("now you see me... now you don't");
}

function display(num) {
    console.log("click");

    var x = document.getElementById("p"+num);

    if(x.style.display == "none") {
        console.log()
        x.style.display = "block";
        for(var i = 1; i <= 4; i++) {
            if(i != num) {
                document.getElementById("p"+i).style.display = "none";
            }
        }
    } else {
        x.style.display = "none";
    }
}

