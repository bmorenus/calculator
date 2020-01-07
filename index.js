let screen = {
    lastEquation: document.getElementById("lastEquation"),

    displayEquation: function(input) {
        /* consider reducing font size if current equation overruns main line */
        document.getElementById("currentEquation").textContent += input;
    }
}

let keypad = {

    loadKeyEvents: function (){

        document.getElementById("clear").addEventListener('click', this.onClick, false),
        document.getElementById("delete").addEventListener('click', this.onClick, false),
        document.getElementById("negate").addEventListener('click', this.onClick, false),
        document.getElementById("one").addEventListener('click', this.onClick, false),
        document.getElementById("two").addEventListener('click', this.onClick, false),
        document.getElementById("three").addEventListener('click', this.onClick, false),
        document.getElementById("four").addEventListener('click', this.onClick, false),
        document.getElementById("five").addEventListener('click', this.onClick, false),
        document.getElementById("six").addEventListener('click', this.onClick, false),
        document.getElementById("seven").addEventListener('click', this.onClick, false),
        document.getElementById("eight").addEventListener('click', this.onClick, false),
        document.getElementById("nine").addEventListener('click', this.onClick, false),
        document.getElementById("zero").addEventListener('click', this.onClick, false),
        document.getElementById("decimal").addEventListener('click', this.onClick, false),
        document.getElementById("add").addEventListener('click', this.onClick, false),
        document.getElementById("subtract").addEventListener('click', this.onClick, false),
        document.getElementById("multiply").addEventListener('click', this.onClick, false),
        document.getElementById("divide").addEventListener('click', this.onClick, false),
        document.getElementById("equals").addEventListener('click', this.onClick, false)
    },

    onClick: function(event){
        /* if = is clicked, call calculator.parse(equation) */
        /* for remainder of inputs, call display equation w/ their ID to use in switch */

        screen.displayEquation(event.target.textContent);
    }
}

let calculator = {

    add: function(num1, num2) {
        return num1 + num2;
    },
    
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    
    divide: function(num1, num2) {
        return num1 / num2;
    },
    
    operate: function(operator, num1, num2) {
        switch (operator) {
            case "+":
                return add(num1, num2);
            case "-":
                return subtract(num1, num2);
            case "*":
                return multiply(num1, num2);
            case "/":
                return divide(num1, num2);
            default:
                console.log("Not a valid operator.");
        }
    },

    parse: function(equation) {
        /* while (equation.contains(class=operator) {
            Run regular expression searching for all operators and calculate them in order of precedence. 
            Also parse for (-) signs and ensure they are packaged with num1/num2 When calling this.operate(). */
        
    }
}


keypad.loadKeyEvents();