let  g:number=5;
// Upper half of the diamond
for(let i:number=1;i<=g;i++){
   
    let space :string=" ";
    // Print spaces
    for (let j: number = g; j >= i; j--) {
        space += " ";
    }
// Print numbers
    for(let j:number=1;j<=i;j++){
        space+=j+" ";
       
        
    }
   console.log(space); 
}
for(let i:number=g-1;i>=1;i--){
   
    let space :string=" ";
    // Print spaces
    for (let j: number = g; j >= i; j--) {
        space += " ";
    }
// Print numbers
    for(let j:number=1;j<=i;j++){
        space+=j+" ";
       
        
    }
   console.log(space); 
}