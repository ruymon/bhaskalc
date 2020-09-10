// Se /\ > 0 => Há 2 Raizes Reais e destintas.
// Se /\ = 0 => Há 2 Raizes Reais e Iguais (Raiz Dupla)
// Se /\ < 0 => Não há Raizes no conjunto de números Reais (2 Raizes Complexas)

function calcularDelta(a, b, c) {
    const valorDelta = (b ** 2) - 4 * (a * c);

    if (valorDelta < 0) {
        throw new Error("Não existe raizes reais para esses coeficientes...");
    };

    return valorDelta;
};

function calcularBhaskara(a, b, c) {
    const delta = calcularDelta(a, b, c);
    const raizDelta = Math.sqrt(Math.abs(delta)); // V1.1 - Add Math.abs para tornar delta um valor POSITIVO para calcular a Raiz
    const x1 = (-b + raizDelta) / (2 * a); // V1.1 - Bug Fix 
    const x2 = (-b - raizDelta) / (2 * a);

    return {
        x1,
        x2
    };

};

function calcularResultado() {
    const A = parseInt($('#coeficienteA').val());
    const B = parseInt($('#coeficienteB').val());
    const C = parseInt($('#coeficienteC').val());

    if (isNaN(A) === true || isNaN(B) === true || isNaN(C) === true) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Faltando parametros.',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            customClass: {
                popup: 'popup-class',
                header: 'header-class',
                title: 'title-class',
                content: 'content-class',
            },
        })
        return;
    }

    if (A == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'O Coeficiente A não pode ser 0.',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            customClass: {
                popup: 'popup-class',
                header: 'header-class',
                title: 'title-class',
                content: 'content-class',
            },
        })
        return;
    };

    try {
        const { x1, x2 } = calcularBhaskara(A, B, C);

        document.getElementById("resultadoDeltaTratado").innerHTML = calcularDelta(A, B, C).toFixed(2);
        document.getElementById("x1Tratado").innerHTML = x1.toFixed(2);
        document.getElementById("x2Tratado").innerHTML = x2.toFixed(2);

        document.getElementById("resCS1Tratado").innerHTML = x1.toFixed(2);
        document.getElementById("resCS2Tratado").innerHTML = x2.toFixed(2);



    } catch (e) {
        alert(e.message);
    }
};