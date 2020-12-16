let screen = {
    currentEquation: document.getElementById("currentEquation"),
    lastEquation: document.getElementById("lastEquation"),

    displayEquation: function(input) {
        /* consider reducing font size if current equation overruns main line */
        this.currentEquation.textContent = input.substring(0,10);
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
        /* for remainder of IDs, call display equation with appropriate input */
        switch (event.target.id) {
            case "clear":
                screen.displayEquation("");
                break;
            case "delete":
                screen.displayEquation(screen.currentEquation.textContent.slice(0, -1));
                break;
            case "negate":
                if (screen.currentEquation.textContent.substr(0,1) === "-") {
                    screen.displayEquation(screen.currentEquation.textContent.slice(1));
                } else {
                    screen.displayEquation("-" + screen.currentEquation.textContent);
                }
                break;
            case "equals":
                calculator.parse(screen.currentEquation.textContent);
                break;
            default:
                screen.displayEquation(screen.currentEquation.textContent + event.target.textContent);
                break;       
        }
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
    
    operate: function(match, p1, p2, p3) {
        p1 = parseInt(p1);
        p3 = parseInt(p3);
        switch (p2) {
            case "+":
                return calculator.add(p1, p3);
            case "-":
                return calculator.subtract(p1, p3);
            case "×":
                return calculator.multiply(p1, p3);
            case "÷":
                return calculator.divide(p1, p3);
            default:
                console.log("Not a valid operator.");
        }
    },

    parse: function(equation) {
        /* while (equation.contains(class=operator) {
            Run regular expression searching for all operators and calculate them in order of precedence. 
            Also parse for (-) signs and ensure they are packaged with num1/num2 When calling this.operate(). */
        let temp = equation;
        const multiplyDivide = /(-?\d+)([×÷])(-?\d+)/
        const addSubtract = /(-?\d+)([+-])(-?\d+)/
        /*const error = /(\D)(-?\d*?)(\D?)/*/

        while (multiplyDivide.test(temp) === true) {
            console.log(`multiplication or division detected in: ${temp}`);
            temp = temp.replace(multiplyDivide, this.operate);
            console.log(`all multiplication and division operations are resolved in: ${temp}`);
        }

        while (addSubtract.test(temp) === true) {
            console.log(`addition or subtraction detected in: ${temp}`);
            temp = temp.replace(addSubtract, this.operate);
            console.log(`all addition and subtraction operations are resolved in: ${temp}`);
        }

        /*while (error.test(temp) === true) {
            console.log(`error detected in: ${temp}`);
            temp = temp.replace(error, 'error');
            console.log('error message displayed');
        }*/
        screen.displayEquation(temp);
    }
}


keypad.loadKeyEvents();