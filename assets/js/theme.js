function mudarCor() {

    $(".bodyStyle").toggleClass(["bodyStyle", "lightBodyStyle"]);
    $(".formInput").toggleClass(["formInput", "lightFormInput"]);
    $(".inputTittle").toggleClass(["inputTittle", "lightInputTittle"]);
    $(".formula").toggleClass(["formula", "lightFormula"]);
    $(".inputA").toggleClass(["inputA", "lightInputA"]);
    $(".inputB").toggleClass(["inputB", "lightInputB"]);
    $(".inputC").toggleClass(["inputC", "lightInputC"]);
    $(".inputPH").toggleClass(["inputPH", "lightInputPH"]);
    $(".botaoLimpar").toggleClass(["botaoLimpar", "lightBotaoLimpar"]);
    $(".botaoCalcular").toggleClass(["botaoCalcular", "lightBotaoCalcular"]);
    $(".modoNoturno").toggleClass(["modoNoturno", "lightModoNoturno"]);
    $(".devCredits").toggleClass(["devCredits", "lightDevCredits"]);
    $(".graph").toggleClass(["graph", "lightGraph"]);
    $(".formOutput").toggleClass(["formOutput", "lightFormOutput"]);
    $(".headerDeltaTratado").toggleClass(["headerDeltaTratado", "lightHeaderDeltaTratado"]);
    $(".headerX1Tratado").toggleClass(["headerX1Tratado", "lightHeaderX1Tratado"]);
    $(".headerX2Tratado").toggleClass(["headerX2Tratado", "lightHeaderX2Tratado"]);
    $(".headerConjuntoSolucaoTratado").toggleClass(["headerConjuntoSolucaoTratado", "lightHeaderConjuntoSolucaoTratado"]);
};

$("#mudarCor").click(mudarCor);