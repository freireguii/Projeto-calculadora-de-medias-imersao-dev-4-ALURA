function media() {
    var nota1 = parseFloat(document.querySelector("#nota1").value);
    var nota2 = parseFloat(document.querySelector("#nota2").value);
    var nota3 = parseFloat(document.querySelector("#nota3").value);

    var calcular = ((nota1 + nota2 + nota3) / 3).toFixed(1);

    document.querySelector("#result").textContent = "Tua média é: " + calcular;
}