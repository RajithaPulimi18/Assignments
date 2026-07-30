// 1.Temperature of a city in degrees Celsius: 25.5 
let cityTemperature:number=25.5;
console.log(`Temperature of a city in degrees Celsius:${cityTemperature}`);

// 2. Whether a customer has placed an order: true or false
let PlacedAnOrder:boolean=true;
console.log("Customer has placed and order:",PlacedAnOrder);

// 3. Person's phone number: "123-456-7890"
let phoneNumber:string="123-456-7890";
console.log(`Person's phone number:${phoneNumber}`);


//4. Amount of money in a customer's bank account: 1000.50
let CustomerMoney:number =1000.50;
console.log("Amount of money in a customer's bank account:",CustomerMoney);

//5.Person's email address: "john.doe@example.com" 

let emailAddress:string="john.doe@example.com"
console.log(`Person's email address:${emailAddress}`);

// 6.Coordinates of a location (latitude, longitude): 37.7749, -122.4194
//way1
let latitude:number=37.7749;
let longitude:number =-122.4194;
console.log(`Coordinates of a location: (${latitude},${longitude})`);

//way 2
interface coordinates{
        latitude:number;
        longtitude:number;
}

let coordinate:coordinates={
       latitude:37.7749,
       longtitude:-122.4194

}

console.log(latitude);
console.log(longitude);

// 7.Person's marital status: true or false
 let maritalStatus:boolean=false;
 console.log("Marital status:",maritalStatus);

// 8.Person's occupation: "Software Engineer"
let occupation :string="Software Engineer";
console.log("Person's occupation:",occupation);

//9.Person's favourite colour: "Blue"
let favouriteColor:string="Blue";
console.log(`Person's favourite colour: ${favouriteColor}`)

// 10. Current year: 2023 
let currentYear:number=2023;
console.log(currentYear);

// 11. Number of followers on a social media platform: 1,000,000 
let socialMediaFollowers:number=1000000 ;
console.log('Number of followers on a social media platform:',socialMediaFollowers);

// 12. Rating of a movie: 7.5 
let movieRation:number=7.5;
console.log("Movie Rating:",movieRation);

// 13. Person's blood type: 'A' 
let bloodGroup:string='A';
console.log(`Person's blood type:${bloodGroup}`);

// 14. Title of a book: "To Kill a Mockingbird" 
let bookTitle:string="To Kill a Mockingbird";
console.log("Title of book:",bookTitle)

// 15. Number of employees in a company: 500
let nOfEmployees:number=500;
console.log('Number of employess in a company:',nOfEmployees);

// 16. Time of an event: 2:30 PM 
let eventTime:string="2:30 PM ";
console.log(`Time of the event: ${eventTime}`);


// 17. Name of a country: "United States" 
let countryName:string="United States";
console.log(countryName);

// 18. Person's eye color: "Brown" 
let eyeColor:string="Brown";
console.log(`Person eye color: ${eyeColor}`);

// 19. Person's birthplace: "New York City" 
let birthplace:string="New York City";
console.log("Person's birth palce:",birthplace);

// 20. Distance between two cities: 200.5
let citiesDistance:number=200.5;
console.log(`Distance between two cities :${citiesDistance}`);
