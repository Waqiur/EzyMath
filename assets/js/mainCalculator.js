
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