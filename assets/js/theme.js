function mudarCor() {


    let statusTema = document.getElementById('switch') // Pegando Elemento do HTML (Toggle)
    let temaChecked = false
    if (statusTema) {
        temaChecked = statusTema.checked // Por ser um toggle checar se ele esta toggled ou não
    };
    sessionStorage.setItem('temaAtual', temaChecked ? 'light' : 'dark') // Setar um valor no cache para o status do Tema


    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('bodyStyle').classList.remove('lightBodyStyle') : document.getElementById('bodyStyle').classList.add('lightBodyStyle');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('formInput').classList.remove('lightFormInput') : document.getElementById('formInput').classList.add('lightFormInput');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('inputTittle').classList.remove('lightInputTittle') : document.getElementById('inputTittle').classList.add('lightInputTittle');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('formula').classList.remove('lightFormula') : document.getElementById('formula').classList.add('lightFormula');

    Array.from(document.getElementsByClassName('inputDefault')).forEach(element => {
        sessionStorage.getItem('temaAtual') == 'dark' ? element.classList.remove('lightInput') : element.classList.add('lightInput')
    });

    // sessionStorage.getItem('temaAtual') == 'dark' ? $('.inputDefault').classList.remove('lightInput') : $('.inputDefault').classList.add('lightInput');

    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('inputPH').classList.remove('lightInputPH') : document.getElementById('inputPH').classList.add('lightInputPH');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('inputTextA').classList.remove('lightInputText') : document.getElementById('inputTextA').classList.add('lightInputText');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('inputTextB').classList.remove('lightInputText') : document.getElementById('inputTextB').classList.add('lightInputText');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('inputTextC').classList.remove('lightInputText') : document.getElementById('inputTextC').classList.add('lightInputText');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('botaoLimpar').classList.remove('lightBotaoLimpar') : document.getElementById('botaoLimpar').classList.add('lightBotaoLimpar');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('botaoCalcular').classList.remove('lightBotaoCalcular') : document.getElementById('botaoCalcular').classList.add('lightBotaoCalcular');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('modoNoturno').classList.remove('lightModoNoturno') : document.getElementById('modoNoturno').classList.add('lightModoNoturno');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('devCredits').classList.remove('lightDevCredits') : document.getElementById('devCredits').classList.add('lightDevCredits');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('graph').classList.remove('lightGraph') : document.getElementById('graph').classList.add('lightGraph');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('formOutput').classList.remove('lightFormOutput') : document.getElementById('formOutput').classList.add('lightFormOutput');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('tituloOutput').classList.remove('lightTituloOutput') : document.getElementById('tituloOutput').classList.add('lightTituloOutput');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('headerDeltaTratado').classList.remove('lightHeaderDeltaTratado') : document.getElementById('headerDeltaTratado').classList.add('lightHeaderDeltaTratado');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('headerX1Tratado').classList.remove('lightHeaderX1Tratado') : document.getElementById('headerX1Tratado').classList.add('lightHeaderX1Tratado');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('headerX2Tratado').classList.remove('lightHeaderX2Tratado') : document.getElementById('headerX2Tratado').classList.add('lightHeaderX2Tratado');
    sessionStorage.getItem('temaAtual') == 'dark' ? document.getElementById('headerConjuntoSolucaoTratado').classList.remove('lightHeaderConjuntoSolucaoTratado') : document.getElementById('headerConjuntoSolucaoTratado').classList.add('lightHeaderConjuntoSolucaoTratado');

};

$('#mudarCor').click(mudarCor);