let studentNames:string[]=["Suresh","Naresh","Mahesh"];
let studentMarks:number[]=[75,80,82];
let updatedMarks:number[]=[];
for(let i=0;i<studentMarks.length;i++){
    updatedMarks[i]=studentMarks[i]+10;
}

console.log("updated marks:",updatedMarks);
let totalMarks:number=0;

for(let j=0;j<updatedMarks.length;j++){
    totalMarks=totalMarks+updatedMarks[j];
   
}

 console.log("total marks:::"+totalMarks);

let avg:number=0
avg= totalMarks/updatedMarks.length;
console.log("Average Marks::"+avg);