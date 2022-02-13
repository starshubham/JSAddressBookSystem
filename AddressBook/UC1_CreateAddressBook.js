/* UC 1: Ability to create a Address Book Contact with first and last names, address, city, state, 
         zip, phone number and email…
         - Program is written using IDE like VSS Code
         - Every UC is in a separate Git Branch and then merged with main
         - Naming Convention, Indentation, etc Code Hygiene will be checked during Review
         - Git Check In Comments and Version History will be monitored.
*/

//npm install prompt-sync
const prompt=require("prompt-sync")();  // For Taking input from user

class Person
{
    //properties
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;  
    emailId;

    //defining constructor of class using constructor keeyword
    constructor(...parameters)
    {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zipCode = parameters[5];
        this.phoneNumber = parameters[6]; 
        this.emailId = parameters[7];
    }
    //methid to return everything in string
    toString()
    {
        return `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nAddress: ${this.address}\nCity: ${this.city}\nState: ${this.state}\nZipCode: ${this.zipCode}\nPhone Number: ${this.phoneNumber}\nEmail-Id: ${this.emailId}`;
    }
}
try
{
    let firstName = prompt('Enter FirstName: ');
    let lastName = prompt('Enter lastName: ');
    let address = prompt('Enter Address: ');
    let city = prompt('Enter city: ');
    let state = prompt('Enter state: ');
    let zipCode = parseInt(prompt('Enter Zip Code: '));
    let phoneNumber = parseInt(prompt('Enter Phone Number: '));
    let emailId = prompt('Enter Email Id: ');
    //Object for class
    let person = new Person(firstName,lastName,address,city,state,zipCode,phoneNumber,emailId);
    console.log("\n************************Contact Deatils******************");
   console.log(person.toString());
}
catch(e)
{
    console.error(e);
}