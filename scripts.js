function triangle() {
    var side1 = parseInt(document.getElementById("side1").value);
    var side2 = parseInt(document.getElementById("side2").value);
    var base = parseInt(document.getElementById("base").value);
    var sides = [side1, side2, base];
    var answer;
    if (side1 <= 0 || side2 <=0 || base <=0){
        answer = "use positive intergers";
    }
}