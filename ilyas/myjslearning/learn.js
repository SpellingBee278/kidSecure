var jsa;

jsa = "Hello World, Im learning JS";
        console.log(jsa);

// w3schools copy and paste because I cant be bothered
var x, y, z;    // Statement 1 //
x = 5;          // Statement 2 //
y = 6;          // Statement 3 //
z = x + y;      // Statement 4 //
    console.log(x, y, z);


            // if we want to alert these x, y, & z we do this
            alert(x);
alert(y);
           alert(z);
        // We can do semicolons on one line, this is multiple variables on one line
a = 4; b = 10; c = a + b;
        console.log(a, b, c);
        // Instructions so far is alert x then y then z then we put those variables into the console of the browser then we put a b and c into the console

var person="hege";
    // alert(person);
            var person1 = "hege";
                console.log(person1);
                    // person does alert hege and person1 does put hege into the console this is because JS does not care about no spaces. This is called whitespace


var x1, y1, z1;       // How to declare variables
x1 = 100; y1 = 50;      // How to assign values
z1 = x1 + y1;         // How to compute values
    console.log(x1, y1, z1);

    // JS Literals
var decimal;
decimal = 10.50;
    // alert(decimal);
        console.log(decimal);


        var nonDecimal;
        nonDecimal = 1001;
     //   alert(nonDecimal);
        console.log(nonDecimal);

// JS can have numbers that have decimals and numbers that dont have decimals

var doubleQuotes;
    doubleQuotes = "Code is cool" +
        "                                                                                       ";
        document.write(doubleQuotes);

        var singleQuotes;
            singleQuotes = 'Super Duper Missile';
                document.write(singleQuotes);

                // JS accepts single Quote strings and double Quote strings

                var macBookPro;
                    macBookPro = 6;
                    document.write("     ");
                        document.write(macBookPro);
                // JS uses the var keyword to declare variables

        var arithmetic;
        arithmetic = (5 + 6) * 10 - 10 / 8;
            alert(arithmetic);
            // JS allows any arithmetic plus as + multiple as * subtract as - divided by as /

var equal, sign;
equal = 5;
sign = 6;       document.write("   ");
        document.writeln(equal, sign);
        // JS uses = to assign the value


    var expression;
        expression = 5 * 10;
            console.log(expression);
        // An expression is a combination of values, variables, and operators, which computes to a value.
// The computation is called an evaluation.
// For example, 5 * 10 evaluates to 50
    var ilyas;
    ilyas = x * 10;

            document.writeln("  " + ilyas);
            // Expressions can also contain variable values:
        var ilyasDupe;
            ilyasDupe = "John" + " " + "Doe";
                // The values can be of various types, such as numbers and strings.
//
// For example, "John" + " " + "Doe", evaluates to "John Doe":
alert(ilyasDupe);


var lastname, lastName;
lastName = "Doe";
lastname = "Peterson";
        console.log(lastname, lastName);

            // the variable lastname is a typo but the variable lastName is not a typo all JavaScript identifiers are case sensitive.

// functions
var xml = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b;             // Function returns the product of a and b

}
    console.log(myFunction());

var carName = "Volvo";
    console.log(carName + "  P421");


var car = {type:"Fiat", model:500, color:"white"};
        alert(car);


var person100 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
        console.log(person100);

document.write(person100.lastName);

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
sln = txt.length;

    alert(sln);
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
alert(res);

var car1 = "Saab";
var car2 = "Volvo";
var car3 = "BMW";

document.write("  " + car1 + "  " + car2 + "  " + car3);

var cars =  Array("Saab", "Volvo", "BMW");

console.log(cars);
var name = cars[0];
        alert(cars);
cars[0] = "Opel";


// dates



var d = new Date(9, 11, 24);
        document.write(" The date is " + d);

        // 1+1 = 2 2+2 = 4 4+4 = 8 8+8 = 16 QUICK MATHS
    // QUICK MATHS list
Math.PI;            // returns 3.141592653589793

Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4

Math.pow(8, 2);      // returns 64
Math.sqrt(64);      // returns 8
Math.abs(-4.7);     // returns 4.7
Math.ceil(4.4);     // returns 5
Math.floor(4.7);    // returns 4
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
Math.cos(12312 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Math.max(0, 150, 30, 20, -8, -200);  // returns 150
Math.random();     // returns a random numb
Math.E ;       // returns Euler's number
Math.PI ;      // returns PI
Math.SQRT2;    // returns the square root of 2
Math.SQRT1_2;  // returns the square root of 1/2
Math.LN2  ;    // returns the natural logarithm of 2
Math.LN10  ;   // returns the natural logarithm of 10
Math.LOG2E  ;  // returns base 2 logarithm of E
Math.LOG10E  ; // returns base 10 logarithm of E
    var quickMaths =
        Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99
            document.write("  " + quickMaths);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
alert(getRndInteger());

// Booleans
Boolean(10 > 9) ;       // returns true
// you can use the Boolean() function to find out if an expression (or a variable) is true:

        // Here are examples
 // == 	equal to 	if (day == "Monday")
// > 	greater than 	if (salary > 9000)
// < 	less than 	if (age < 18)

var x1001 = 0;
Boolean(x1001);       // returns false
    // The boolean value of 0 is false
var x1011 = -0;
Boolean(x1011);       // returns false
    // The boolean value of -0 is also false
var emptyStringBoolean = "";
    Boolean(emptyStringBoolean); // returns false
        // Empty strings are also false
    var undefined;
        Boolean(undefined);
            // the boolean value of undefined things are false
    var Nul123 = null;
        Boolean(Nul123); // returns false
            // the boolean value of null are false

        var False1234 = false;
            Boolean(False1234); // returns false
            // the boolean value of false are false

            var NAN = 10 / "H";
                Boolean(NAN); // returns false
                // the boolean value of NaN are false
        var BooleanObject = new Boolean(false);
                // Boolean can be objects

        var age = 16;



