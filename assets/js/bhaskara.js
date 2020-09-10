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
        alert("Faltando Parametros")
        return;
    }

    if (A == 0) {
        alert("O coeficiente A não pode ser 0!");
        return;
    };

    try {
        const { x1, x2 } = calcularBhaskara(A, B, C);

        // Dados Cru
        /*
                document.getElementById("resultadoDeltaRaw").innerHTML = calcularDelta(A, B, C)
                document.getElementById("x1Raw").innerHTML = x1
                document.getElementById("x2Raw").innerHTML = x2

                document.getElementById("resCS1Raw").innerHTML = x1
                document.getElementById("resCS2Raw").innerHTML = x2

        */
        // Dados Tratados


        document.getElementById("resultadoDeltaTratado").innerHTML = calcularDelta(A, B, C).toFixed(2);
        document.getElementById("x1Tratado").innerHTML = x1.toFixed(2);
        document.getElementById("x2Tratado").innerHTML = x2.toFixed(2);

        document.getElementById("resCS1Tratado").innerHTML = x1.toFixed(2);
        document.getElementById("resCS2Tratado").innerHTML = x2.toFixed(2);



    } catch (e) {
        alert(e.message);
    }
};




/**     Version Logs
 

        ***********************
        *=====================*
        *--------V1.0---------*
        *=====================*
        ***********************

        => Source Code 

        ***********************
        *=====================*
        *--------V1.1---------*
        *=====================*
        ***********************

        => [Line 17] || Add Math.abs para tornar o resultado(return) da Function calcularDelta para um valor POSITIVO para calcular a Raiz.

        => [Line 18 & 19] || Typographical Error / Bug Fix x1 = (-b + raizDelta) & x2 = (-b - raizDelta)


*/