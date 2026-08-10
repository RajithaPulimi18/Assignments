
function primeStatus(number: number): boolean {
    let count: number = 0;

    for (let i: number = 1; i <= number; i++) {
        if (number % i ==0) {
            count++;
        }
    }
 if (count == 2) {
        return true;
    } else {
        return false;
    }
}

console.log(primeStatus(7));   
console.log(primeStatus(25));  
console.log(primeStatus(1));  
console.log(primeStatus(11));  