function empDetails(creditScroce: number, income: number, isEmployed: boolean, debtToIncomeRatio: number): void {
    if (creditScroce > 750) {
        console.log("Good credit score so loan  approved")
    }

    if (creditScroce >= 650 && creditScroce <= 750) {
        console.log("additional checks are performed.")
        if (income >= 50000) {
            console.log(" loan considered.")
            if (isEmployed == true) {
                console.log("customer is employed")

                if (debtToIncomeRatio <=40) {
                    console.log("loan is approved")
                } else {
                    console.log("loan is denined")
                }
            } else {
                console.log("customer is unemployed,so loan is denied")
            }
        } else {
            console.log("income is not sufficient,loan is denied.")
        }
    }
    else if (creditScroce < 650) {
        console.log("loan is denied.")
    }
}

empDetails(650, 50000, true, 35.5);
console.log("-------------------------")
empDetails(600, 50000, true, 35.5);
console.log("-------------------------")
empDetails(680, 20000, true, 35.5);
console.log("-------------------------")
empDetails(680, 50000, false, 35.5);
console.log("-------------------------")
empDetails(680, 50000, true, 45);



