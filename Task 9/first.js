const person = {
    firstName: "M",
    lastName: "Usman",
    age: 27,
    address: {
        street: "123 Main St", 
        city: "Anytoun",
        zip: "12345"
    },
    hobbies: ["reading", "travelling", "swimming"],
    isEmployed: true,
    education: {
        degree: "Bachelor's",
        major: "Computer Science",
        graduationYear: 2015
    },
    skills: ["JavaScript", "React", "Node.js"],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    addSkill: function(newSkill) {
        this.skills.push(newSkill);
    }
};
    
         //Q1 Retrieve the city form the address property of the person object.
console.log(person.address.city);


         //Q2 Update the age of the person to 31.
person.age = "31"


         //Q3 Add a new property phoneNumber with the value "555-1234" to the person object.
person.phoneNumber = "555-1234"


         //Q4 Delete the isEmployed property from the person object.
delete person.isEmployed;


         //Q5 Retrieve the second hobby from the hobbies array.
console.log(person.hobbies[1]);




         //Q6 Call the getFullName method and store the result in a variable.
let result = person.getFullName()
console.log(result);


         //Q7 Add a new hobby "cooking" to the hobbies array.
person.hobbies.push("cooking");


         //Q8 Check if the person object has a property called education.
console.log(person.hasOwnProperty("education"));


         //Q9 Use a loop to print all property names of the person object.
console.log(Object.keys(person));


         //Q10 Create a string that combines the firstName and LastName properties
        //   with the street from the address, resulting in "john Doe lives at 123 Main St".
let newString = `"${person.firstName} ${person.lastName} lives at ${person.address.street}"`
let functionString = function () {
return `${person.firstName} ${person.lastName} lives at ${person.address.street}`
}
 console.log(functionString()); 
console.log(newString); 

         
console.log(person);
