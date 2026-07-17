//Task-1 Printing stars in right angle triangle using RECURSIVE Function.
function stars(n){
    if(n<1){
        return;
    }
    else{
        const printStarts = (n) =>{
            let stars = "";
            for (let i = 0; i < n; i++) {
                stars += "* "
            }
            return stars;
        }
        
        console.log(printStarts(n));
        stars(n-1);
    }
}


////Task-2 Printing stars in Diamond shape using RECURSIVE Function.
function diamond(n,k=0){
    if(n<1){
        k = 0
        return ;
    }
    else{

        const spaces = (k) => {
            let space = "";
            for (let i = 0; i <= k; i++) {
                space += " ";

            }
            return space;
        }

        const printStarts = (n) =>{
            let stars = "";
            for (let i = 0; i < n; i++) {
                stars += "* "
            }
            return stars;
        }

        console.log(spaces(k),printStarts(n));
        return diamond(n-1,k+1);
        
    }
}

//print Y
function printy(n,k=0,j=n){
    if(n<1){
        k = 0
        return ;
    }
    else{

        const spaces = (k) => {
            let space = "";
            for (let i = 0; i < k; i++) {
                space += " ";

            }
            return space;
        }
        

        console.log(spaces(k),"Y",spaces(j-1),spaces(j-1),"Y");
        return printy(n-1,k+1,j-1);
        
    }
}

function line(n,abc){
    
    const spaces = (k) => {
            let space = "";
            for (let i = 0; i < k; i++) {
                space += " ";

            }
            return space;
        }

        for(let i = 0;i<n;i++){
            console.log(spaces(n),"Y")
        }

        // abc(n)
}

console.log("Right Angle Triangle. \n");
stars(5);

console.log("Diamond: \n");
diamond(5);

console.log("Printy: \n");
line(15+1, printy(15));


