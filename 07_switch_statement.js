// Example :- 01
const expr = "Oranges";
switch (expr) {
    case "Oranges" :
        console.log("Oranges are 100rs/kg.");
        break;
        case "apples" :
            console.log("Appls are 200rs/kg.");
            break;
            case "Bananas":
                console.log("Bananaes are 50rs/dazen.");
                break;
                default:
                console.log(`Sorry, we are out of ${expr}.`);


}

console.log("Is there anything else you like?");

// Example :- 02
const Animal = "Giraffe";
switch (Animal) {
    case "cow":
    case "Pig":
    case "Dog":
    case "Giraffe":
        console.log("This animal is not extinct.");
    break;
    case "Dinosaur":
        default:
        console.log("This animal is extinct.")

}


