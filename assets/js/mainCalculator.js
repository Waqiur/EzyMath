
function resetCalculator() {
    var output = document.getElementById("solution");
    var form = document.getElementById("form");
    form.reset();
    output.innerHTML = "";
}

// SOLVE FOR X
function solveForX() {
    a = parseFloat(document.getElementById("solvex").value);
    b = parseFloat(document.getElementById("solvey").value);
    c = parseFloat(document.getElementById("solvez").value);
    var output = document.getElementById("solution");
    var ans = "";
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        ans += "\\[Please \\space enter \\space all \\space the \\space values \\]";
        output.innerHTML = ans;
        renderMathInElement(output);
    }
    else if (b < 0) {
        ans += "\\[The \\space value \\space of \\space X \\space is \\]";
        ans += "\\[" + a + "\\space X \\space " + b + "\\space = \\space " + c + " \\]";
        ans += "\\[" + a + "\\space X \\space = \\space " + (c - b) + "\\]";
        ans += "\\[\\space X \\space = \\space " + (c - b) / a + "\\]";
        output.innerHTML = ans;
        renderMathInElement(output);
    }
    else {
        ans += "\\[The \\space value \\space of \\space X \\space is \\]";
        ans += "\\[" + a + "\\space X \\space + \\space " + b + "\\space = \\space " + c + " \\]";
        ans += "\\[" + a + "\\space X \\space = \\space " + (c - b) + "\\]";
        ans += "\\[\\space X \\space = \\space " + (c - b) / a + "\\]";
        output.innerHTML = ans;
        renderMathInElement(output);
    }
}

// FRACTIONS
function solveFraction(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var tempnum1 = num1;
    var tempnum2 = num2;
    var result = '';
    var temp = '';
    if (num1 % num2 == 0) {
        temp += `Dividing both Denominator and Numerator by ${num2}`;
        temp += `\\[\\frac{\\cancel{${num1}}}{\\cancel{${num2}}}=`;
        num1 /= num2;
        num2 = 1;
        temp += `\\frac{${num1}}{${num2}}\\]`;
        sol = `\\frac{${num1}}{${num2}}`;
    } else {
        var flag = 0;
        var sol = '';
        var max = 0;
        if (num1 > num2) {
            max = num1;
        } else {
            max = num2;
        }
        temp += `\\[\\frac{${num1}}{${num2}}\\]`;
        for (i = 2; i <= max; i++) {
            if (num1 % i == 0 && num2 % i == 0) {
                flag = 1;
                temp += `Dividing both Denominator and Numerator by ${i}`;
                temp += `\\[\\frac{\\cancel{${num1}}}{\\cancel{${num2}}} = `;
                num1 /= i;
                num2 /= i;
                sol = `\\frac{${num1}}{${num2}}`;
                temp += `\\frac{${num1}}{${num2}}\\]`;
            }
        }
    }

    if (flag == 0) {
        temp = '';
        temp += `Both Denominator and Numerator are not divisible by any Common Number`;
        sol = `\\frac{${num1}}{${num2}}`;
        result += `\\[\\frac{${tempnum1}}{${tempnum2}} = ${sol}\\]`
    } else {
        result += `\\[\\frac{${tempnum1}}{${tempnum2}} = ${sol}\\]`;
    }
    return { 'result': result, 'steps': temp };
}
function callSolveFraction() {
    var num1 = document.getElementById('num1solvefraction').value;
    var num2 = document.getElementById('num2solvefraction').value;

    var data = solveFraction(num1, num2);

    if (num2 == 0) {
        document.getElementById('solution').innerHTML = "Invalid Operation , Denominator can't be zero of a Fraction";
        // document.getElementById('outputresult').innerHTML = " ";
    }
    else {
        document.getElementById('solution').innerHTML = data['steps'];
        // document.getElementById('outputresult').innerHTML = data['result'];
    }
    renderMathInElement(document.getElementById('solution'));
    // renderMathInElement(document.getElementById('outputresult'));
}