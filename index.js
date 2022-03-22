const shopping = [12 * [6 / 3]];
console.log(shopping);
const calc = [12, '+', 3, '*', 4]
if (calc.includes('+')) {
    calc.shift()
    calc.shift()
    calc.push('+', 12);
}
console.log(calc);
for (const calcs of calc);
console.log(calc);
document.getElementById("num:1").addEventListener("click", () => {
    document.getElementById("numberBox").value += "1"
})
document.getElementById("num:2").addEventListener("click", () => {
    document.getElementById("numberBox").value += "2"
})
document.getElementById("num:3").addEventListener("click", () => {
    document.getElementById("numberBox").value += "3"
})
document.getElementById("num:4").addEventListener("click", () => {
    document.getElementById("numberBox").value += "4"
})
document.getElementById("num:5").addEventListener("click", () => {
    document.getElementById("numberBox").value += "5"
})
document.getElementById("num:6").addEventListener("click", () => {
    document.getElementById("numberBox").value += "6"
})
document.getElementById("num:7").addEventListener("click", () => {
    document.getElementById("numberBox").value += "7"
})
document.getElementById("num:8").addEventListener("click", () => {
    document.getElementById("numberBox").value += "8"
})
document.getElementById("num:9").addEventListener("click", () => {
    document.getElementById("numberBox").value += "9"
})
document.getElementById("num:0").addEventListener("click", () => {
    document.getElementById("numberBox").value += "0"
})
document.getElementById("operation:+").addEventListener("click", () => {
    document.getElementById("numberBox").value += "+"
})
document.getElementById("operation:-").addEventListener("click", () => {
    document.getElementById("numberBox").value += "-"
})
document.getElementById("operation:/").addEventListener("click", () => {
    document.getElementById("numberBox").value += "/"
})
document.getElementById("operation:*").addEventListener("click", () => {
    document.getElementById("numberBox").value += "*"
})
