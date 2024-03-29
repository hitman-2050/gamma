let side1, side2;
let temp, result;

document.getElementById("submit").onclick = function() {
    side1 = document.getElementById("s1").value;
    side2 = document.getElementById("s2").value;
    side1 = Number(side1);
    side2 = Number(side2);
    temp = Math.pow(side1, 2) + Math.pow(side2, 2);
    result = Math.sqrt(temp);
    document.getElementById("res").innerHTML = " The hypotenuse of a triangle having sides " + side1 + " & " + side2 + " is " + result;
}
console.log(result);