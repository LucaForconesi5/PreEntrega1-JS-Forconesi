function adivinarNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const maxIntentos = 10;

    let intentos = 0;
    let adivinado = false;

    while (intentos < maxIntentos && !adivinado) {
        const intento = parseInt(prompt(`Tenés ${maxIntentos - intentos} intentos restantes, adiviná el número del 1 al 100`));
        intentos++;

        if (intento === numeroAleatorio) {
            alert(`¡Al fín! El número era ${numeroAleatorio}. Lo adivinaste en ${intentos} intentos.`);
            adivinado = true;
        } else if (intento < numeroAleatorio) {
            alert("El número es más alto. Intentá de vuelta.");
        } else {
            alert("El número es más bajo. Intentá de vuelta.");
        }
    }

    if (!adivinado) {
        alert(`GG perdiste. El número era ${numeroAleatorio}.`);
    }

    const jugarDeNuevo = confirm("¿Querés jugar de nuevo?");
    if (jugarDeNuevo) {
        adivinarNumero();
    } else {
        alert("¡Gracias por jugar!");
    }
}

adivinarNumero();

