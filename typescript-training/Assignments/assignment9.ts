
//left triangle pattern
// let n:number=5;
for(let i:number =1;i<=5;i++){
    let line :string="";
    for(let j:number=1;j<=i;j++){
        line+="*";
    }
    console.log(line);
}



//right triangle pattern
let num:number=5;
for(let i:number =1;i<=num;i++){
     //empty line
    let line:string="";
    // Inner loop to print spaces before stars in each row
    for(let k:number =i;k<num;k++){
        
       line+=" "; 
    }
    // Inner loop to print stars in each row
    for(let j:number=1;j<=i;j++){
        
        line+="*";
    }
    
    console.log(line);
}
