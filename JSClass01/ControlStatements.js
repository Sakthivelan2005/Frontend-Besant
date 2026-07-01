start: 
let a = +prompt("Enter a mark:")
switch (true) {
    case (a > 100):
        a = prompt("Enter correct number within 100")
        break start;
    case (a < 50):
        console.log("Fail")
        break;
    case (a < 60):
        console.log("Grade B")
        break;
    case (a < 75):
        console.log("Grade A")
        break;
    case (a < 90):
        console.log("Grade D")
        break;
    case (a <= 100):
        console.log("Grade O")
        break;
    default:
        console.log("Unexpected Error")
        break;
}
