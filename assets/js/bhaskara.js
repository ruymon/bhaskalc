// Se /\ > 0 => Há 2 Raizes Reais e destintas.
// Se /\ = 0 => Há 2 Raizes Reais e Iguais (Raiz Dupla)
// Se /\ < 0 => Não há Raizes no conjunto de números Reais (2 Raizes Complexas)

function calcularDelta(a, b, c) {
    const valorDelta = (b ** 2) - 4 * (a * c);

    if (valorDelta < 0) {
        throw new Error('Não há Raizes no conjunto de números Reais');

    };
    return valorDelta;
};

function calcularBhaskara(a, b, c) {
    const delta = calcularDelta(a, b, c);
    const raizDelta = Math.sqrt(Math.abs(delta));
    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);

    return {
        x1,
        x2
    };

};

function calcularResultado() {

    const A = parseFloat($('#coeficienteA').val());
    const B = parseFloat($('#coeficienteB').val());
    const C = parseFloat($('#coeficienteC').val());

    // Condições & Erros

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        mostrarModalAlerta('error', 'Opps...', 'Faltando parametros.');
        return;
    }

    if (A == 0) {

        console.log('raiz =', C * - 1 / B)
        //mostrarModalAlerta('error', 'Opps...', 'O Coeficiente A não pode ser 0.');
        //return;
    };

    document.getElementById('graphText').style.display = 'none';
    document.getElementById('plotGraph').style.display = 'block';

    functionPlot({
        title: '',
        target: document.querySelector("#plotGraph"),
        width: 730,
        height: 660,
        grid: true,
        tip: {
            xLine: true, // dashed line parallel to y = 0
            yLine: true, // dashed line parallel to x = 0
        },
        xAxis: {
            label: 'x - axis',
            domain: [-10, 10]
        },
        yAxis: {
            label: 'y - axis'
        },
        data: [{
            fn: `${A}x^2 + ${B}x + ${C}`,
            color: '#ffffff',
        }]
    })

    try {
        const { x1, x2 } = calcularBhaskara(A, B, C);

        document.getElementById("resultadoDeltaTratado").innerHTML = calcularDelta(A, B, C).toFixed(2);
        document.getElementById("x1Tratado").innerHTML = x1.toFixed(2);
        document.getElementById("x2Tratado").innerHTML = x2.toFixed(2);

        document.getElementById("resCS1Tratado").innerHTML = x1.toFixed(2);
        document.getElementById("resCS2Tratado").innerHTML = x2.toFixed(2);



    } catch (e) {
        mostrarModalAlerta('info', 'Aviso:', e.message);
    }
};


function resetarValores() {

    document.getElementById('coeficienteA').value = null;
    document.getElementById('coeficienteB').value = null;
    document.getElementById('coeficienteC').value = null;

    document.getElementById('graphText').style.display = 'block';
    document.getElementById('plotGraph').style.display = 'none';

    document.getElementById("resultadoDeltaTratado").innerHTML = 'value';
    document.getElementById("x1Tratado").innerHTML = 'value';
    document.getElementById("x2Tratado").innerHTML = 'value';

    document.getElementById("resCS1Tratado").innerHTML = '';
    document.getElementById("resCS2Tratado").innerHTML = '';

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
            popup: temaAtual == 'dark' ? 'popup-classDark' : 'popup-classLight',
            header: temaAtual == 'dark' ? 'header-classDark' : 'header-classLight',
            title: temaAtual == 'dark' ? 'title-classDark' : 'title-classLight',
            content: temaAtual == 'dark' ? 'content-classDark' : 'content-classLight',
        },
    });
};
