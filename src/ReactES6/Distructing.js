function Calculate(a, b){
    const add = a + b;
    const sub = a  - b;
    const mult = a * b;
    const div = a / b;
    return [add, sub, mult, div];
}

const [add,sub,mult,div] = Calculate(6,1);

const vehileOne = {
    brand: "Ford",	
    model: "Mustang",
    year : "1964",
    type : "Car",
    registration : {
        state: "CA",
        country: "srilaka",
        city: "mannar"
    }
}

myVehile(vehileOne);
function myVehile({brand, model, year, type, registration:{state}})
{
    const message = brand + " " + model + " " + year + " " + type + " " + state;
    console.log(message);
}