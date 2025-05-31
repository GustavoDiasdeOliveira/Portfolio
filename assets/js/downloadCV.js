document.getElementById("download-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão

    const btn = event.target;
    btn.innerHTML = "Baixando...";

    setTimeout(() => {
        const a = document.createElement("a");
        a.href = "dowload/Currículo 2025.pdf";
        a.download = "Currículo 2025.pdf";
        a.click(); // Inicia o download

        btn.innerHTML = "<b>Download CV</b>";
    }, 2000);
}); 