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

};

$("#mudarCor").click(mudarCor);