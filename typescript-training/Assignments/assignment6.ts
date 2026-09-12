
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




for(let k:number=2;k<=100;k++){ //iterate from 2 to 100
    let count :number=0;
    for(let i:number=1;i<=k;i++ ){//2%1,2%2,2%3
        if(k%i==0){
           count++;
        }
    }
   if(count==2){
     console.log(k);
        
     }
   }
