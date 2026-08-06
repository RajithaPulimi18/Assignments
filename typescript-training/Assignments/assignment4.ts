interface transactions{
    "transaction":number;
    "amount":number;
}

let transactionDetails:transactions[]=[
    {transaction:1,amount:50000},
    {transaction:2,amount:-2000},
    {transaction:3,amount:3000},
    {transaction:4,amount:-15000},
    {transaction:5,amount:-200},
    {transaction:6,amount:-300},
    {transaction:7,amount:4000},
    {transaction:8,amount:-3000}
    ];
    let creditAmout:number=0;
    let debitAmount:number=0;
    let Suspicious :number=0;
    let creditTransactions:number =0
    let debitTransactions:number=0;
    let SuspiciousTransactions:number=0
    for(let i:number=0;i<transactionDetails.length;i++){
        if(transactionDetails[i]?.amount>1){
           creditAmout=creditAmout+transactionDetails[i]?.amount;
           creditTransactions=creditTransactions+1;
       
        }else if(transactionDetails[i]?.amount<-10000){
            console.log('Suspicious credit/ debitTransaction with Amount',transactionDetails[i]?.amount);
            Suspicious=Suspicious+transactionDetails[i]?.amount;
            SuspiciousTransactions=SuspiciousTransactions+1;
        }
        else if(transactionDetails[i]?.amount>-10000){
            debitAmount=debitAmount+transactionDetails[i]?.amount;
            debitTransactions=debitTransactions+1;
        }
        
    }
    console.log("total credit amount and "+creditAmout,"transactions:::"+creditTransactions);
    console.log("total credit amount and  :"+debitAmount,"transactions:::"+debitTransactions);
     console.log("total suspicioyus amount"+Suspicious,"transactions:::"+SuspiciousTransactions);