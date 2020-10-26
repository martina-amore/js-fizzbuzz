// CICLO DEI NUMERI FINO A 100
for (var i = 1; i <= 100; i++) {

    // SE IL NUMERO E' DIVISIBILE SIA PER 3 CHE PER 5, STAMPA FIZZBUZZ
    if (i % 3 == 0 && i % 5 == 0) {
        document.getElementById("lista").innerHTML += "<li>FizzBuzz</li>"
    }

    // SE IL NUMERO E' DIVISIBILE PER 3, STAMPA FIZZ
    else if (i % 3 == 0) {
        document.getElementById("lista").innerHTML += "<li>Fizz</li>"
    }

    // SE IL NUMERO E' DIVISIBILE PER 5, STAMPA BUZZ
    else if (i % 5 == 0) {
        document.getElementById("lista").innerHTML += "<li>Buzz</li>"
    }

    // NEGLI ALTRI CASI, OSSIA QUANDO IL NUMERO NON E' DIVISIBILE NE' PER 3 NE' PER 5, STAMPA IL NUMERO
    else {
        document.getElementById("lista").innerHTML += "<li>" + i + "</li>"
    }
}
