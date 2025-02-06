window.addEventListener("load", function () {
    let glossarioButton = document.querySelector(".glossario-float");

    if (glossarioButton) {
        // Força a exibição e posicionamento correto
        glossarioButton.style.display = "flex";
        glossarioButton.style.zIndex = "99999"; // Garante que está no topo
        glossarioButton.style.position = "fixed";
        glossarioButton.style.bottom = "20px";
        glossarioButton.style.right = "20px";
    }

    // Verifica a cada 2 segundos se o botão sumiu e o reexibe
    setInterval(() => {
        if (glossarioButton && glossarioButton.style.display === "none") {
            glossarioButton.style.display = "flex";
        }
    }, 2000);
});
