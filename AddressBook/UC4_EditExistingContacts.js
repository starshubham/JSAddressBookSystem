/* UC 4: Ability to find existing contact person using their name and edit it */

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
    //method to return everything in string
    toString()
    {
        return `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nAddress: ${this.address}\nCity: ${this.city}\nState: ${this.state}\nZipCode: ${this.zipCode}\nPhone Number: ${this.phoneNumber}\nEmail-Id: ${this.emailId}\n************`;
    }
}
//Array to store objects
var addressBookPersonArr = new Array();
//method to validate name 
let getName = (type) =>
{
    let namePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
    try
    {
        let name =  prompt(`Enter ${type}: `);
        if(!namePattern.test(name))
            throw `Error!! ${type} is in Incorrect Format`;
        else
            return name;

    }
    catch(e)
    {
        console.error(e);
    }
}
//method to validate address details
let getAddressDetails = (type) =>
{
    try
    {
        let addresspattern = new RegExp('^[A-za-z\\s]{4,}$');
        let value = prompt(`Enter ${type}: `);
        if(!addresspattern.test(value))
                throw `Error!! ${type} should have minimum 4 characters`;
        else
            return value;
    }
    catch(e)
    {
        console.error(e);
    }
}
//method to validate zipcode
let getZipCode = () =>
{
    try
    {
        let zipCodePattern = new RegExp('^[1-9]{1}[0-9]{2}\\s?[0-9]{3}$');
        let zipCode = prompt('Enter Zip Code: ');
        if(!zipCodePattern.test(zipCode))
            throw 'Error!! ZipCode is not valid';
        else
            return zipCode;
    }
    catch(e)
    {
        console.error(e);
    }
    
}
//method to validate phone nu,mber
let getPhoneNumber = () =>
{
    try
    {
        let phoneNumPattern =new RegExp('^[0-9]{2}\\s[0-9]{10}$');
        let phoneNumber = prompt('Enter Phone Number: ');
        if(!phoneNumPattern.test(phoneNumber))
            throw 'Error!! PhoneNumber is not valid .. Eg. 91 9876543210';
        else
            return phoneNumber;
    }
    catch(e)
    {
        console.error(e);
    }
}
//method to validate email
let getEmail = () =>
{
    try
    {
        let emailPattern = new RegExp('^[A-Za-z]+([+. \-_]{1}\w+)?@[a-z0-9]+\.[a-z]{2,3}(\.[a-z]{2})?$');
        let emailId = prompt('Enter Email Id: ');
        if(!emailPattern.test(emailId))
            throw 'Error!! Email Id is not valid';
        else
            return emailId;
    }
    catch(e)
    {
        console.error(e);
    }
}
//method to add details into object
let ValidateAndAdd = () =>
{
    try
    {
        //FirstName
        while(true)
        {
            var firstName =getName('FirstName');
            if(firstName!=null)
                break;
        }
        //LastName
        while(true)
        {
            var lastName = getName('LastName');
            if(lastName!=null)
                break;
        }
        //Address
        while(true)
        {
            var address = getAddressDetails('address');
            if(address!=null)
                break;
        }
        
        //city
        while(true)
        {
            var city = getAddressDetails('city');
            if(city!=null)
                break;
        }
        
        //state
        while(true)
        {
            var state = getAddressDetails('state');
            if(state!=null)
                break;
        }
        
        //zipCode
        while(true)
        {
            var zipCode = getZipCode();
            if(zipCode!=null)
                break;
        }
        //phone number
        while(true)
        {
            var phoneNumber = getPhoneNumber();
            if(phoneNumber!=null)
                break;
        }
        //email id
        while(true)
        {
            var emailId = getEmail();
            if(emailId!=null)
                break;
        }
        
        //-----------------------------------------------------------------------------------------------------
        //Object for class
        let person = new Person(firstName,lastName,address,city,state,zipCode,phoneNumber,emailId);
        return person;    
    }
    catch(e)
    {
        console.error(e);
    }
       
}
//Function to add contacts into array
let AddContacts = () =>
{
    let numOfPersons = parseInt(prompt('Enter Number of contacts you want to add? : '));
    while(numOfPersons--)
    {
        let person = ValidateAndAdd();
        addressBookPersonArr.push(person);
        console.log("***********************");
    }
}
//function to display contacts
let DisplayContacts = () =>
{
    if(addressBookPersonArr.length>0)
    {
        console.log("********************AddressBook*******************");
        addressBookPersonArr.forEach(x => console.log(x.toString())); 
    }
    else
    {
        console.log("No details present");
    }
   
}
//function to edit contacts
let EditContacts = () =>
{
    try
    {
        if(addressBookPersonArr.length>0)
        {
            while(true)
            {
                var editPersonName = getName('Enter first name of person you want to edit');
                if(editPersonName!=null)
                    break;
            }
            let personDetails = addressBookPersonArr.find(x => x.firstName == editPersonName);
            if(personDetails==null)
                throw `Error! This ${editPersonName} name is not present`;
            while(true)
            {
                console.log("1.Edit Firstname\n2.Edit Lastname\n3.Edit Address\n4.Edit city\n5.Edit State\n6.Zipcode\n7.Phone number\n8.email id\n9.Exit");
                switch(parseInt(prompt('Enter the choice? : ')))
                {
                    case 1:
                        //FirstName
                        while(true)
                        {
                            var fName =getName('FirstName');
                            if(fName!=null)
                                break;
                        }
                        personDetails.firstName = fname;
                        console.log("Edited");
                        break;
                    case 2:
                        //LastName
                        while(true)
                        {
                            var lName = getName('LastName');
                            if(lName!=null)
                                break;
                        }
                        personDetails.lastName = lName;
                        console.log("Edited");
                        break;
                    case 3:
                        //Address
                        while(true)
                        {
                            var addr = getAddressDetails('address');
                            if(addr!=null)
                                break;
                        }
                        personDetails.address = addr;
                        console.log("Edited");
                        break;
                    case 4:
                        //city
                        while(true)
                        {
                            var c = getAddressDetails('city');
                            if(c!=null)
                                break;
                        }
                        personDetails.city = c;
                        console.log("Edited");
                        break;
                    case 5:
                        //state
                        while(true)
                        {
                            var s = getAddressDetails('state');
                            if(s!=null)
                                break;
                        }
                        personDetails.state = s;
                        console.log("Edited");
                        break;
                    case 6:
                        //zipCode
                        while(true)
                        {
                            var ZC = getZipCode();
                            if(ZC!=null)
                                break;
                        }
                        personDetails.zipCode = ZC;
                        console.log("Edited");
                        break;
                    case 7:
                        //phone number
                        while(true)
                        {
                            var pN = getPhoneNumber();
                            if(pN!=null)
                                break;
                        }
                        personDetails.phoneNumber = pN;
                        console.log("Edited");
                        break;
                    case 8:
                        //email id
                        while(true)
                        {
                            var mailId = getEmail();
                            if(mailId!=null)
                                break;
                        }
                        personDetails.emailId = mailId;
                        console.log("Edited");
                        break;
                    case 9:
                        console.log("Exited");
                        return;
                    default:
                        console.log("Enter correct value");
                        break;

                }
            }
        }
        else
            throw 'Address book is empty'
        
    }
    catch(e)
    {
        console.error(e);
    }
    
}
let AddressBookOperations = () =>
{
    try
    {
        while(true)
        {
            console.log("************************\n1.Add new contacts to addressbook\n2.Display\n3.Edit Contacts\n4.Exit");
            switch(parseInt(prompt('Enter the choice? : ')))
            {
                case 1:
                    AddContacts();
                    break;
                case 2:
                    DisplayContacts();
                    break;
                case 3:
                    EditContacts();
                    break;
                case 4:
                    console.log("Exited");
                    return;
                default:
                    console.log("Enter Valid Option");
                    break;
            }
        }
    }
    catch(e)
    {
        console.error(e);
    }   
        
}
AddressBookOperations();