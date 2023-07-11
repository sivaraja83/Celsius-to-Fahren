
function clicked(){
    let input = Number(document.getElementById("input").value);
    let result = document.getElementById("result");
    let fahrenval = (input *9/5) + 32;
    result.innerHTML = fahrenval.toFixed(1) + " fahrenheit";
}