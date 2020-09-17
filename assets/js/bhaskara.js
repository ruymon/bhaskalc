// Se /\ > 0 => Há 2 Raizes Reais e destintas.
// Se /\ = 0 => Há 2 Raizes Reais e Iguais (Raiz Dupla)
// Se /\ < 0 => Não há Raizes no conjunto de números Reais (2 Raizes Complexas)

function calcularDelta(a, b, c) {
    const valorDelta = (b ** 2) - 4 * (a * c);
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

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        mostrarModalAlerta('error', 'Opps...', 'Faltando parametros.');
        return;
    }

    if (A == 0) {
        mostrarModalAlerta('error', 'Opps...', 'O Coeficiente A não pode ser 0.');
        return;
    };

    document.getElementById('graphText').style.display = 'none';
    document.getElementById('plotGraph').style.display = 'block';

    try {
        const { x1, x2 } = calcularBhaskara(A, B, C);

        let resultadoDelta = calcularDelta(A, B, C);

        if (resultadoDelta >= 0) {
            document.getElementById("resultadoDeltaTratado").innerHTML = resultadoDelta.toFixed(2);
            document.getElementById("x1Tratado").innerHTML = x1.toFixed(2);
            document.getElementById("x2Tratado").innerHTML = x2.toFixed(2);

            document.getElementById("resCS1Tratado").innerHTML = x1.toFixed(2);
            document.getElementById("resCS2Tratado").innerHTML = x2.toFixed(2);

            functionPlot({
                target: document.querySelector("#plotGraph"),
                width: 700,
                height: 600,
                yAxis: {
                    domain: [-1, 9]
                },
                grid: true,
                data: [{
                    // fn: 'x^2 + 2x + 3', // f(x) = ax² + bx + c
                    fn: `${A}x^2 + ${B}x + ${C}`
                }]
            });

        } else {
            mostrarModalAlerta('error', 'Opps...', 'Não há Raizes no conjunto de números Reais');
            setTimeout(() => {
                resetarValores();
            }, 2501)
        };
    } catch {
        mostrarModalAlerta('error', 'Opps...', 'Algo deu errado... ');
    };
};


function resetarValores() {

    document.getElementById('coeficienteA').value = null;
    document.getElementById('coeficienteB').value = null;
    document.getElementById('coeficienteC').value = null;

    document.getElementById('graphText').style.display = 'block';
    document.getElementById('plotGraph').style.display = 'none';

    document.getElementById("resultadoDeltaTratado").innerHTML = "value";
    document.getElementById("x1Tratado").innerHTML = "value";
    document.getElementById("x2Tratado").innerHTML = "value";

    document.getElementById("resCS1Tratado").innerHTML = "";
    document.getElementById("resCS2Tratado").innerHTML = "";

};

function mostrarModalAlerta(icon, title, text) {
    let temaAtual = sessionStorage.getItem('temaAtual');
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        customClass: {
            popup: temaAtual == 'dark' ? 'popup-class' : 'popup-classLight',
            header: temaAtual == 'dark' ? 'header-class' : 'header-classLight',
            title: temaAtual == 'dark' ? 'title-class' : 'title-classLight',
            content: temaAtual == 'dark' ? 'content-class' : 'content-classLight',
        },
    });
};



// SWEET ALERTS TEMPLATES

/*

ICONS  [ success, error, warning, question, info ]

*/