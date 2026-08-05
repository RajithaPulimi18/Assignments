interface empdata {
    "SNo": number;
    "name": string;
    "Basesalary": number;
    "Experience": number;
    "YearEndRating": number
}
let empDetails: empdata[] = [
    {
        SNo: 1,
        name: "Alice Johnson",
        Basesalary: 75000.0,
        Experience: 5.1,
        YearEndRating: 4.2
    },
    {
        SNo: 2,
        name: "Bob Smith",
        Basesalary: 68000.0,
        Experience: 3.2,
        YearEndRating: 3.8
    },
    {
        SNo: 3,
        name: "Carol Davis",
        Basesalary: 820000,
        Experience: 7.1,
        YearEndRating: 4.5

    },
    {
        SNo: 4,
        name: "David Brown",
        Basesalary: 90000.0,
        Experience: 10.2,
        YearEndRating: 2.5

    },
    {
        SNo: 5,
        name: "Eva Green",
        Basesalary: 60000.0,
        Experience: 2.4,
        YearEndRating: 3.5
    }
];


let empHikes: Map<string, number> = new Map();

let hike: number = 0;
let  hikePercentage:number =0;
for (let emp of empDetails) {

    if (emp.YearEndRating >= 4.0 && emp.Experience>=5){

           hike =(emp.Basesalary * 15) / 100 + 1500+5000;
                 hikePercentage =(hike/emp.Basesalary)*100;
    } else if (emp.YearEndRating >= 3 && emp.YearEndRating < 4 || emp.Experience>=5){
        hike = (emp.Basesalary * 10) / 100 + 1000;
        hikePercentage =(hike/emp.Basesalary)*100;
    } else if (emp.YearEndRating<3|| emp.Experience>=5){
        hike = (emp.Basesalary * 3) / 100 + 300+5000;
        hikePercentage =(hike/emp.Basesalary)*100;
    } else {
        console.log("no hike");
    }
    empHikes.set("EmployeName:"+emp.name,+hikePercentage)
   
    
}

 console.log(empHikes);
