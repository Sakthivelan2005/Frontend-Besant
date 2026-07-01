// let n = Number(prompt("Enter multiplication table you want: "));
// let j = Number(prompt("Enter how many number of multiplication: "))

// for(let i = 1; i <=j; i++ ){
//     console.log(i + " X " + n + " = " + i*n)
// }

// let i = 1;
// console.log("current: " + i);
// while(i<=9){
//     console.log(i);
//     i++;
// }
// console.log("current: " + i)

// var arr = [1,2,3,4,"sum"]
// for(let a of arr){
//     console.log(a)
// }

// let obj = {
//     name:['Sakthi','Manith'],
//     Age:[20,21]
// }
// for(let i in obj){
//     console.log(i," : ",obj[i])
// }

//Pyramid
let n = 5;
for(let i = n; i>1; i--){
    for(let j = n; j > n-i; j--){
        process.stdout.write("  ")
    }
    for(k = i; k<= n; k++){
        process.stdout.write("* ")
    }
    console.log()
    
 }
// for(let i = 1; i<=n; i++){
//     for(let j = n; j > n-i; j--){
//         process.stdout.write(" ")
//     }
//     for(k = i; k<= n; k++){
//         process.stdout.write("* ")
//     }
//     console.log()
    
// }