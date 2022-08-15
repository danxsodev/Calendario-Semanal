function Mostrar() {
    const numSemana = document.getElementById("textboxNum").value;

    switch (numSemana) {
        case "1":
            document.getElementById("textboxExtenso").value="Domingo";
        break;

        case "2":
            document.getElementById("textboxExtenso").value="Segunda";
        break;

        case "3":
            document.getElementById("textboxExtenso").value="Terça";
        break;

        case "4":
            document.getElementById("textboxExtenso").value="Quarta";
        break;

        case "5":
            document.getElementById("textboxExtenso").value="Quinta";
        break;

        case "6":
            document.getElementById("textboxExtenso").value="Sexta";
        break;

        case "7":
            document.getElementById("textboxExtenso").value="Sábado";
        break;
    }
}

function Limpar() {
    document.getElementById("textboxNum").focus();
}
