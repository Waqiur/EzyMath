
function resetCalculator() {
    var output = document.querySelectorAll(".solution");
    var form = document.querySelectorAll(".form");
    form.forEach(element => {
        element.reset();
    })
    output.forEach(element2 => {
        element2.innerHTML = "";
    });
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
    }
    else {
        document.getElementById('solution').innerHTML = data['steps'];
    }
    renderMathInElement(document.getElementById('solution'));
}


// Quadratic equation whose roots are K times the roots of given equation
function ktimes() {
    let A = parseInt(document.getElementById('aofeqn').value)
    let B = parseInt(document.getElementById('bofeqn').value)
    let C = parseInt(document.getElementById('cofeqn').value)
    let K = parseInt(document.getElementById('kofeqn').value)
    var res = document.getElementById("solutionKtimes");
    if (isNaN(A) || isNaN(B) || isNaN(C) || isNaN(K)) {
        res.innerHTML = "Please enter all the values";
    } else {
        res.innerHTML += "Coefficient of x<sup>2</sup>: " + A + "<br>";
        res.innerHTML += "Coefficient of x: " + B + "<br>";
        res.innerHTML += "Constant term: " + C + "<br>";
        res.innerHTML += "Number of times the equation is to be multiplied: " + K + "<br>";
        res.innerHTML += "The Quadratic equation whose roots are K times the roots of given equation: " + A + " " + K * B
            + " " + K * K * C
    }
}

//Quadratic equation whose roots are reciprocal to the roots of given equation
function reciprocal() {
    let A = parseInt(document.getElementById("aofeqn1").value)
    let B = parseInt(document.getElementById("bofeqn1").value)
    let C = parseInt(document.getElementById("cofeqn1").value)
    var output = document.getElementById("solutionReciprocal")
    var ans = "";
    if (!isNaN(A) && !isNaN(B) && !isNaN(C)) {
        ans += "\\[For \\space the \\space Quadratic \\space Equation \\space ax^{2}+bx+c \\space = \\space 0 \\space consider \\space the \\space roots \\space are \\space given \\space p,q \\]"
        ans += "\\[Sum \\space and \\space Product \\space of \\space roots \\space is \\space given \\space by, \\] "
        ans += "\\[p \\space + \\space q \\space = \\space \\frac{-b}{a} and \\space p \\space \\times \\space q \\space = \\space \\frac{c}{a} \\]"
        ans += "\\[The \\space reciprocal \\space of \\space the \\space roots \\space are \\space \\frac{1}{p} \\space , \\space \\frac{1}{q}  \\]"
        ans += "\\[\\frac{1}{p} \\space + \\space \\frac{1}{q} \\space = \\space \\frac{-b}{c} and \\space \\frac{1}{p} \\space \\times \\space \\frac{1}{q} \\space = \\space \\frac{a}{c} \\]"
        ans += "\\[Solving \\space roots \\space the \\space Quadratic \\space Equation \\space becomes \\space cx^{2}+bx+a \\space = 0 \\]"
        ans += "\\[The \\space Quadratic \\space Equation \\space with \\space these \\space reciprocal \\space roots \\space is \\space (" + C + ")  x^2 + (" + B + ") x + (" + A + ") = 0 \\]"
    }
    else {
        ans += "\\[Please \\space enter \\space all \\space the \\space values\\]";
    }
    output.innerHTML = ans;
    renderMathInElement(output);
}


//Quadratic Equation having given sum and product of roots
function sumProduct() {
    var S = parseInt(document.getElementById("sumOfRoots").value)
    var P = parseInt(document.getElementById("productOfRoots").value)
    var output = document.getElementById("solutionSumProduct")
    var ans = "";
    if (!isNaN(S) && !isNaN(P)) {
        ans += "\\[For \\space the \\space Quadratic \\space Equation \\space ax^{2}+bx+c \\space = \\space 0 \\space the \\space roots \\space are \\space given \\space by, \\]"
        ans += "\\[x \\space = \\space \\frac{-b ± \\sqrt{b^{2} - 4ac}}{2a} \\]"
        ans += "\\[Sum \\space and \\space Product \\space of \\space roots \\space is \\space given \\space by, \\] "
        ans += "\\[S \\space = \\space \\frac{-b}{a} and \\space P \\space = \\space \\frac{c}{a} \\]"
        ans += "\\[The \\space  Equation \\space is \\space given \\space by: \\space x^{2} + (-1) \\times S + P = 0 \\]"
        ans += "\\[The \\space equation \\space is \\space  x^2" + (-S) + " x + " + P + " \\space = \\space 0 \\]"
    } else {
        ans += "\\[Please \\space enter \\space all \\space the \\space values\\]";
    }
    output.innerHTML = ans;
    renderMathInElement(output);
}


//Maximum and Minimum value of a quadratic function
function maxMin() {
    var a = parseInt(document.getElementById("aofeqn2").value)
    var b = parseInt(document.getElementById("bofeqn2").value)
    var c = parseInt(document.getElementById("cofeqn2").value)
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        var secondPart = parseInt(c) * 1.0 - (parseInt(b) ** 2 / (4.0 * parseInt(a)));
        if (a > 0) {
            document.getElementById("maxminquadans1").innerHTML = "\\[Since \\space the \\space coefficeient \\space of \\space x^2 \\space > \\space 0 \\newline Maxvalue \\space  = \\space Infinity \\]";
            document.getElementById("maxminquadans2").innerHTML = "\\[Minvalue \\space = \\space constant \\times 1 \\space - \\space \\frac{(coefficeient \\space of \\space x)^2}{4 \\times (coefficeient \\space of \\space x^2)} \\space = \\space" + c + " \\times 1 \\space - \\space (\\frac{" + b + "^2}{4 \\times " + a + "}) \\space = \\space " + secondPart.toFixed(3) + "\\]";
        } else if (a < 0) {
            document.getElementById("maxminquadans1").innerHTML = "\\[Maxvalue \\space =  \\space constant \\times 1 \\space - \\space \\frac{(coefficeient \\space of \\space x)^2}{4 \\times (coefficeient \\space of \\space x^2)} \\space = \\space " + c + " \\times 1 \\space - \\space (\\frac{" + b + "^2}{4 \\times " + a + "}) \\space = \\space " + secondPart.toFixed(3) + "\\]";
            document.getElementById("maxminquadans2").innerHTML = "\\[Since \\space the \\space coefficeient \\space of \\space x^2 \\space < \\space 0 \\newline Minvalue \\space  = \\space Infinity \\]";
        }
        renderMathInElement(document.getElementById("maxminquadans1"));
        renderMathInElement(document.getElementById("maxminquadans2"));
    } else {
        document.getElementById("maxminquadans1").innerHTML = "\\[Please \\space enter \\space all \\space the \\space values\\]";
        document.getElementById("maxminquadans2").innerHTML = "";
        renderMathInElement(document.getElementById("maxminquadans1"));
    }
}


//Check whether one root of the Quadratic Equation is twice of other or not
function twice() {
    var a = parseInt(document.getElementById("aofeqn3").value)
    var b = parseInt(document.getElementById("bofeqn3").value)
    var c = parseInt(document.getElementById("cofeqn3").value)
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        if (2 * b * b == 9 * a * c) {
            document.getElementById("solutionTwice").innerHTML = "\\[Since \\space here, \\space (2 \\times b \\times b) \\space exactly \\space equals \\space to \\space (9 \\times a \\times c) \\space that \\space  is, \\newline " + (2 * b * b) + " \\space = \\space " + (9 * a * c) + " \\newline Hence, \\space one \\space root \\space  of \\space the \\space Quadratic \\space Equation \\space is \\space twice\\]";
        } else {
            document.getElementById("solutionTwice").innerHTML = "\\[Since \\space here, \\space (2 \\times b \\times b) \\space NOT \\space equals \\space to \\space (9 \\times a \\times c) \\space that \\space  is, \\newline " + (2 * b * b) + " \\space \\neq \\space " + (9 * a * c) + " \\newline Hence, \\space one \\space root \\space  of \\space the \\space Quadratic \\space Equation \\space is \\space NOT \\space twice\\]";
        }
    } else {
        document.getElementById("solutionTwice").innerHTML = "\\[Please \\space enter \\space all \\space the \\space values\\]";
    }
    renderMathInElement(document.getElementById("solutionTwice"));
}

//PBH Ratio
function calcexsolvesimpletrigo() {
    var pp = document.getElementById("perpendicular").value = 3;
    var base = document.getElementById("base").value;
    var hyp = document.getElementById("hypotenuse").value = 5;

    solvesimpletrigo();
}

function pbhRatios() {
    var pp = document.getElementById("perpendicular").value;
    var base = document.getElementById("base").value;
    var hyp = document.getElementById("hypotenuse").value;
    if ((pp == "" && base == "") || (base == "" && hyp == "") || (hyp == "" && pp == "")) {
        document.getElementById("solution").innerHTML =
            "Kindly fill Atleast 2 fields";
    }
    else if (pp < 0 || base < 0 || hyp < 0) {
        document.getElementById("solution").innerHTML = "The sides cannot be negative"
    }
    else {
        if (parseInt(hyp) < parseInt(pp) || parseInt(hyp) < parseInt(base)) {
            document.getElementById("solution").innerHTML =
                "Hypotenuse Should be Greater";
        } else if (pp != "" && base != "" && hyp != "" && parseInt(hyp) ^ 2 != parseInt(pp) ^ 2 + parseInt(base) ^ 2 && parseInt(hyp) ^ 2 != parseInt(base) ^ 2 + parseInt(pp) ^ 2) {
            document.getElementById("solution").innerHTML =
                "Right angled triangle with such dimensions is not possible";
        } else if (pp == "") {
            var pp = eval(hyp * hyp - base * base);
            var kl = String(pp);
            pp = Math.sqrt(String(pp));
            if (pp.toString() != "NaN") {
                pp = pp.toFixed(2);
                var tempp =
                    "\\[Value\\space of\\space  Perpendicular= \\sqrt{" +
                    kl +
                    "}=" +
                    pp +
                    "\\]";
                tempp +=
                    String(
                        "\\[sin\\theta =\\frac{p}{h} =\\frac{" +
                        pp +
                        "}{" +
                        hyp +
                        "} = " +
                        eval(String(pp + "/" + hyp)).toFixed(2)
                    ) + "\\]";
                tempp +=
                    "\\[cos\\theta =\\frac{b}{h} =\\frac{" +
                    base +
                    "}{" +
                    hyp +
                    "}= " +
                    eval(String(base + "/" + hyp)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[tan\\theta=\\frac{p}{b} =\\frac{" +
                    pp +
                    "}{" +
                    base +
                    "}= " +
                    eval(String(pp + "/" + base)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[cosec\\theta=\\frac{h}{p} =\\frac{" +
                    hyp +
                    "}{" +
                    pp +
                    "}= " +
                    eval(String(hyp + "/" + pp)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[sec\\theta=\\frac{h}{b} =\\frac{" +
                    hyp +
                    "}{" +
                    base +
                    "}= " +
                    eval(String(hyp + "/" + base)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[cot\\theta=\\frac{b}{p} =\\frac{" +
                    base +
                    "}{" +
                    pp +
                    "}= " +
                    eval(String(base + "/" + pp)).toFixed(2) +
                    "\\]";
                document.getElementById("solution").innerHTML = tempp;
                renderMathInElement(document.getElementById("solution"));
            } else {
                document.getElementById("solution").innerHTML =
                    "Cannot Compute for -ve Square Root";
            }
        } else if (base == "") {
            var base = eval(hyp * hyp - pp * pp);
            var kll = String(base);
            base = Math.sqrt(String(base));
            if (base.toString() != "NaN") {
                base = base.toFixed(2);
                var tempp =
                    "\\[Value\\space of\\space Base= \\sqrt{" + kll + "}=" + base + "\\]";
                tempp +=
                    String(
                        "\\[sin\\theta =\\frac{p}{h} =\\frac{" +
                        pp +
                        "}{" +
                        hyp +
                        "} = " +
                        eval(String(pp + "/" + hyp)).toFixed(2)
                    ) + "\\]";
                tempp +=
                    "\\[cos\\theta=\\frac{b}{h} =\\frac{" +
                    base +
                    "}{" +
                    hyp +
                    "} = " +
                    eval(String(base + "/" + hyp)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[tan\\theta=\\frac{p}{b} =\\frac{" +
                    pp +
                    "}{" +
                    base +
                    "}= " +
                    eval(String(pp + "/" + base)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[cosec\\theta=\\frac{h}{p} =\\frac{" +
                    hyp +
                    "}{" +
                    pp +
                    "}= " +
                    eval(String(hyp + "/" + pp)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[sec\\theta=\\frac{h}{b} =\\frac{" +
                    hyp +
                    "}{" +
                    base +
                    "} = " +
                    eval(String(hyp + "/" + base)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[cot\\theta=\\frac{b}{p} =\\frac{" +
                    base +
                    "}{" +
                    pp +
                    "} = " +
                    eval(String(base + "/" + pp)).toFixed(2) +
                    "\\]";
                document.getElementById("solution").innerHTML = tempp;
                renderMathInElement(document.getElementById("solution"));
            } else {
                document.getElementById("solution").innerHTML =
                    "Cannot Compute for -ve Square Root";
            }
        } else if (hyp == "") {
            var hyp = eval(base * base + pp * pp);
            var klll = String(hyp);
            hyp = Math.sqrt(String(hyp));
            if (hyp.toString() != "NaN") {
                hyp = hyp.toFixed(2);
                var tempp =
                    "\\[Value\\space of\\space Hypotenuse=\\sqrt{" +
                    klll +
                    "}=" +
                    hyp +
                    "\\]";
                tempp +=
                    String(
                        "\\[sin\\theta =\\frac{p}{h} =\\frac{" +
                        pp +
                        "}{" +
                        hyp +
                        "}= " +
                        eval(String(pp + "/" + hyp)).toFixed(2)
                    ) + "\\]";
                tempp +=
                    "\\[cos\\theta=\\frac{b}{h} =\\frac{" +
                    base +
                    "}{" +
                    hyp +
                    "}= " +
                    eval(String(base + "/" + hyp)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[tan\\theta=\\frac{p}{b} =\\frac{" +
                    pp +
                    "}{" +
                    base +
                    "}= " +
                    eval(String(pp + "/" + base)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[cosec\\theta=\\frac{h}{p} =\\frac{" +
                    hyp +
                    "}{" +
                    pp +
                    "}= " +
                    eval(String(hyp + "/" + pp)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[sec\\theta=\\frac{h}{b} =\\frac{" +
                    hyp +
                    "}{" +
                    base +
                    "}= " +
                    eval(String(hyp + "/" + base)).toFixed(2) +
                    "\\]";
                tempp +=
                    "\\[cot\\theta=\\frac{b}{p} =\\frac{" +
                    base +
                    "}{" +
                    pp +
                    "} = " +
                    eval(String(base + "/" + pp)).toFixed(2) +
                    "\\]";

                document.getElementById("solution").innerHTML = tempp;
                renderMathInElement(document.getElementById("solution"));
            } else {
                document.getElementById("solution").innerHTML =
                    "Cannot Compute for -ve Square Root";
            }
        } else {
            var tempp =
                String(
                    "\\[sin\\theta =\\frac{p}{h} =\\frac{" +
                    pp +
                    "}{" +
                    hyp +
                    "} = " +
                    eval(String(pp + "/" + hyp)).toFixed(2)
                ) + "\\]";
            tempp +=
                "\\[cos\\theta=\\frac{b}{h} =\\frac{" +
                base +
                "}{" +
                hyp +
                "}=" +
                eval(String(base + "/" + hyp)).toFixed(2) +
                "\\]";
            tempp +=
                "\\[tan\\theta=\\frac{p}{b} =\\frac{" +
                pp +
                "}{" +
                base +
                "}= " +
                eval(String(pp + "/" + base)).toFixed(2) +
                "\\]";
            tempp +=
                "\\[cosec\\theta=\\frac{h}{p} =\\frac{" +
                hyp +
                "}{" +
                pp +
                "} = " +
                eval(String(hyp + "/" + pp)).toFixed(2) +
                "\\]";
            tempp +=
                "\\[sec\\theta=\\frac{h}{b} =\\frac{" +
                hyp +
                "}{" +
                base +
                "} = " +
                eval(String(hyp + "/" + base)).toFixed(2) +
                "\\]";
            tempp +=
                "\\[cot\\theta=\\frac{b}{p} =\\frac{" +
                base +
                "}{" +
                pp +
                "}= " +
                eval(String(base + "/" + pp)).toFixed(2) +
                "\\]";
            document.getElementById("solution").innerHTML = tempp;
            renderMathInElement(document.getElementById("solution"));
        }
    }
}

// Percentage Change
function percentageChange() {
    var initial = parseInt(document.getElementById("initialValue").value);
    var final = parseInt(document.getElementById("finalValue").value);
    var output = document.getElementById("solution");
    var temp = "";

    if (!isNaN(initial) && !isNaN(final)) {
        var ans = ((final - initial) / Math.abs(initial)) * 100;

        temp += "\\[The \\space Percentage \\space change \\space will \\space be,\\]"
        temp += "\\[\\frac{((Final value) - (Initial value))}{ |(Initial value)| } \\times 100\\]"
        temp += "\\[\\space = \\space \\frac{((" + final + ") - (" + initial + "))}{ |(" + initial + ")| } \\times 100\\]"
        temp += "\\[\\space = \\space \\frac{" + (final - initial) + "}{ |(" + initial + ")| } \\times 100\\]"
        temp += "\\[\\space = \\space \\frac{" + (final - initial) + "}{ " + (Math.abs(initial)) + " } \\times 100\\]"
        temp += "\\[\\space = \\space " + ((final - initial) / Math.abs(initial)).toFixed(2) + " \\times 100\\]"
        temp += "\\[\\space = \\space " + ans.toFixed(3) + "\\]"
        temp += "\\[Hence, \\space" + final + " \\space is \\space a \\space " + ans.toFixed(2) + " \\space \\% change \\space of \\space " + initial + "\\]"
        output.innerHTML = temp;
    }
    else {
        temp += "\\[Please \\space enter \\space valid \\space input\\]"
    }
    renderMathInElement(output);
}

// Percentage change in sphere
function changeInSphere() {
    var x = document.getElementById("changeInRadius").value;
    var per = Math.pow(x, 3) / 10000 + 3 * x + (3 * Math.pow(x, 2)) / 100;
    var output = document.getElementById("solutionSphere");
    var temp = "";
    if (x != "") {
        temp += "\\[Percentage \\space increase \\space in \\space the \\space volume \\space of \\space the \\space sphere \\space is \\space\\]";
        temp += "\\[= \\space \\frac{(change \\space in \\space radius)^3}{10000} + 3\\times (change \\space in \\space radius) + \\frac{(3 \\times (change \\space in \\space radius)^2)}{100}\\]";
        temp += "\\[= \\space \\frac{" + x + "^3}{10000} + 3\\times " + x + " + \\frac{(3 \\times " + x + "^2)}{100}\\]";
        temp += "\\[= \\space " + (Math.pow(x, 3) / 10000).toFixed(2) + " + " + (3 * x).toFixed(2) + " + " + ((3 * Math.pow(x, 2)) / 100).toFixed(2) + " \\]";
        temp += "\\[= \\space " + per.toFixed(3) + " \\% \\]";
        output.innerHTML = temp;
    } else {
        temp = "\\[Enter \\space all \\space values\\]";
        output.innerHTML = temp;
    }
    renderMathInElement(output);
}

// percentage change in Cube
function changeInCube() {
    var x = document.getElementById("changeInSide").value;
    var per = (Math.pow(x, 3) / 10000 + 3 * x + (3 * Math.pow(x, 2)) / 100);
    var output = document.getElementById("solutionCube");
    var temp = "";
    if (x != "") {
        temp += "\\[Percentage \\space increase \\space in \\space the \\space volume \\space of \\space the \\space cube \\space is \\space\\]";
        temp += "\\[= \\space \\frac{(change \\space in \\space radius)^3}{10000} + 3\\times (change \\space in \\space radius) + \\frac{(3 \\times (change \\space in \\space radius)^2)}{100}\\]";
        temp += "\\[= \\space\\frac{" + x + "^3}{10000} + 3\\times " + x + " + \\frac{(3 \\times " + x + "^2)}{100}\\]";
        temp += "\\[= \\space " + (Math.pow(x, 3) / 10000).toFixed(2) + " + " + (3 * x).toFixed(2) + " + " + ((3 * Math.pow(x, 2)) / 100).toFixed(2) + " \\]";
        temp += "\\[= \\space " + per.toFixed(3) + " \\% \\]";
        output.innerHTML = temp;
    } else {
        temp += "\\[Enter \\space all \\space values\\]";
        output.innerHTML = temp;
    }
    renderMathInElement(output);
}

// percentage change in Cuboid
function changeInCuboid() {
    var l = document.getElementById("changeInLength").value;
    var b = document.getElementById("changeInBreadth").value;
    var h = document.getElementById("changeInHeight").value;
    var percentInc = ((1 + (l / 100)) * (1 + (b / 100)) * (1 + (h / 100)) - 1) * 100;
    var output = document.getElementById("solutionCuboid");
    var temp = "";
    if (l != "" && b != "" && h != "") {
        temp += "\\[Percentage \\space increase \\space in \\space the \\space volume \\space of \\space the \\space cuboid \\space is \\space\\]";
        temp += "\\[= \\space ((1 + \\frac{Change \\space in \\space length}{100}) \\times (1 + \\frac{Change \\space in \\space breadth}{100}) \\times (1 + \\frac{Change \\space in \\space height}{100}) -1 ) \\times 100\\]";
        temp += "\\[= \\space ((1 + \\frac{" + l + "}{100}) \\times (1 + \\frac{" + b + "}{100}) \\times (1 + \\frac{" + h + "}{100}) -1 ) \\times 100\\]";
        temp += "\\[= \\space (" + (1 + (l / 100)).toFixed(2) + " \\times " + (1 + (b / 100)).toFixed(2) + " \\times " + (1 + (h / 100)).toFixed(2) + "-1 ) \\times 100 \\]";
        temp += "\\[= \\space " + percentInc.toFixed(3) + " \\% \\]";
        output.innerHTML = temp;
    } else {
        temp += "\\[Enter \\space all \\space values\\]";
        output.innerHTML = temp;
    }
    renderMathInElement(output);
}

//Square root calculator
function squareRoot() {
    var i = 1;
    const n = parseInt(document.getElementById("value").value);
    var result = document.getElementById("solution");
    var found = false;
    let steps = "";
    if (n > 0) {
        steps += "\\[\\sqrt{n}\\space is\\space the\\space number\\space that\\space gives\\space n\\space when\\space multiplied\\space by\\space itself\\]";
        steps += "\\[Finding- square\\space roots\\space of\\space numbers\\space that aren't\\space perfect\\space squares\\space :\\]";
        steps += "\\[1.\\space Estimate\\space -\\space first,\\space get\\space as\\space \\space as\\space you\\space can\\space by\\space finding\\space two\\space perfect\\space square\\space roots\\space your\\space number\\space is\\space between.\\]";
        steps += "\\[2.\\space Divide\\space -\\space divide\\space your\\space number\\space by\\space one\\space of\\space those\\space square\\space roots.\\]";
        steps += "\\[3.\\space Average\\space -\\space take\\space the\\space average\\space of\\space the\\space result\\space of\\space step\\space 2\\space and\\space the\\space root.\\]";
        steps += "\\[4.\\space Use\\space the\\space result\\space of\\space step\\space 3\\space to\\space repeat\\space steps\\space 2\\space and\\space 3\\space until\\space you\\space have\\space a\\space number\\space that\\space is\\space accurate\\space enough\\space for\\space you.\\]";
        while (!found) {
            if (i * i == n) {
                steps += "\\[\\sqrt{" + n + "}\\space =\\space " + i + "\\]";
                found = true;
            } else if (i * i > n) {
                var res = square(n, i - 1, i);
                steps += "\\[\\sqrt{" + n + "}\\space =\\space " + res.toFixed(2) + "\\]";
                found = true;
            }
            i++;
        }
        console.log(n);
    } else if (n < 0) {
        steps += "\\[Enter \\space positive \\space values\\]";
    }
    else {
        steps += "\\[Enter \\space all \\space values\\]";
    }
    result.innerHTML = steps;
    renderMathInElement(result);
}

function square(num) {
    return (num * num);
}

//Complex Operations
function complexOperation() {
    var real1 = parseFloat(document.getElementById("real1").value);
    var imaginary1 = parseFloat(document.getElementById("imaginary1").value);
    var real2 = parseFloat(document.getElementById("real2").value);
    var imaginary2 = parseFloat(document.getElementById("imaginary2").value);
    var operation = document.getElementById("operation").value;
    var output = document.getElementById("solution");
    var resultReal, resultImaginary;
    switch (operation) {
        case "Addition":
            resultReal = real1 + real2;
            resultImaginary = imaginary1 + imaginary2;
            break;
        case "Subtraction":
            resultReal = real1 - real2;
            resultImaginary = imaginary1 - imaginary2;
            break;
        case "Multiplication":
            resultReal = real1 * real2 - imaginary1 * imaginary2;
            resultImaginary = real1 * imaginary2 + real2 * imaginary1;
            break;
        case "Division":
            var denominator = real2 * real2 + imaginary2 * imaginary2;
            resultReal = (real1 * real2 + imaginary1 * imaginary2) / denominator;
            resultImaginary = (real2 * imaginary1 - real1 * imaginary2) / denominator;
            break;
        default:
            alert("Invalid operation selected!");
            return;
    }

    output.innerHTML = "Result: " + resultReal + " + " + resultImaginary + "i";
    renderMathInElement(output);
}


//Currency Converter
function curcon() {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
        .then((cur) => {
            return cur.json();
        })
        .then(
            (curout = function (c) {
                const f = c.rates[document.getElementById("curcon-1").value];
                const t = c.rates[document.getElementById("curcon-2").value];
                const i = parseInt(document.getElementById("amount").value);
                if (i < 0) {
                    document.getElementById("solution").innerHTML = "Enter <strong>only</strong> positive amount values";
                }
                else {
                    document.getElementById("solution").innerHTML = `${(i * t) / f}`;
                }
            })
        );
}

//Cramer's Rule 
function cramersRule() {
    var a = parseInt(document.getElementById('a1').value);
    var b = parseInt(document.getElementById('b1').value);
    var c = parseInt(document.getElementById('c1').value);
    var d = parseInt(document.getElementById('a2').value);
    var e = parseInt(document.getElementById('b2').value);
    var f = parseInt(document.getElementById('c2').value);

    var cramtemp = "";
    var cramoutput = document.getElementById("solution");
    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) && !isNaN(f)) {
        var res = (a * e) - (b * d);
        var res1 = (c * e) - (b * f);
        var res2 = (a * f) - (c * d);
        var x = (res1 / res);
        var y = (res2 / res);
        cramtemp += "\\[First, \\space we \\space need \\space to \\space calculate \\space Δ ,\\space  Δ_x \\space and \\space Δ_y\\]"
        cramtemp += "\\[Δ \\space = \\space ((a \\times  e) - (b \\times d))\\]"
        cramtemp += "\\[\\space = \\space ((" + a + " \\times  " + e + ") - (" + b + " \\times " + d + "))\\]"
        cramtemp += "\\[\\space = \\space ((" + (a * e) + ") - (" + (b * d) + "))\\]"
        cramtemp += "\\[\\space = \\space " + res + "\\]"
        cramtemp += "\\[Δ_x \\space = \\space ((c \\times  e) - (b \\times f))\\]"
        cramtemp += "\\[\\space = \\space ((" + c + " \\times  " + e + ") - (" + b + " \\times " + f + "))\\]"
        cramtemp += "\\[\\space = \\space ((" + (c * e) + ") - (" + (b * f) + "))\\]"
        cramtemp += "\\[\\space = \\space " + res1 + "\\]"
        cramtemp += "\\[Δ_y \\space = \\space ((a \\times  f) - (c \\times d))\\]"
        cramtemp += "\\[\\space = \\space ((" + a + " \\times  " + f + ") - (" + c + " \\times " + d + "))\\]"
        cramtemp += "\\[\\space = \\space ((" + (a * f) + ") - (" + (c * d) + "))\\]"
        cramtemp += "\\[\\space = \\space " + res2 + "\\]"
        cramtemp += "\\[Finally, \\space we \\space will \\space calculate \\space X \\space and \\space Y\\]"
        cramtemp += "\\[\\space X \\space = \\space \\frac{Δ_x}{Δ}\\]"
        cramtemp += "\\[\\space = \\space \\frac{" + res1 + "}{" + res + "} \\space = \\space " + x + "\\]";
        cramtemp += "\\[\\space Y \\space = \\space \\frac{Δ_y}{Δ}\\]"
        cramtemp += "\\[\\space = \\space \\frac{" + res2 + "}{" + res + "} \\space = " + y + "\\]";
        cramtemp += "\\[The \\space solution \\space is \\space (X,Y) =  (" + x + "," + y + ") \\]";
        cramoutput.innerHTML = cramtemp;
        renderMathInElement(cramoutput);
    }
    else {
        cramoutput.innerHTML = "\\[Please \\space enter \\space all \\space the \\space values\\]";
        renderMathInElement(cramoutput);
    }
}