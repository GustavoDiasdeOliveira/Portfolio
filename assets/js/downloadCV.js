document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("download-btn");

    if (!btn) return;

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        if (btn.classList.contains("downloading")) return;

        btn.classList.add("downloading");

        const textoOriginal = btn.innerHTML;

        btn.innerHTML = `
            <i class='bx bx-loader-alt bx-spin'></i>
            Baixando...
        `;

        setTimeout(() => {

            const link = document.createElement("a");

            link.href = "dowload/Gustavo_Dias_de_Oliveira_CV.pdf";

            link.download = "Gustavo_Dias_de_Oliveira_CV.pdf";

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

            btn.innerHTML = textoOriginal;

            btn.classList.remove("downloading");

        }, 1800);

    });

});