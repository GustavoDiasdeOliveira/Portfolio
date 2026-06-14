document.getElementById("download-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão

    const btn = event.target;
    btn.innerHTML = "Baixando...";

    setTimeout(() => {
        const a = document.createElement("a");
        a.href = "download/Gustavo_Dias_de_Oliveira_CV (1).pdf";
        a.download = "Gustavo_Dias_de_Oliveira_CV (1).pdf";
        a.click(); // Inicia o download

        btn.innerHTML = "<b>Download CV</b>";
    }, 2000);
}); 