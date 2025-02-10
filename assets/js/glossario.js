document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector("#btnGlossario");
    const tituloGlossario = document.querySelector("#glossario h2"); // Seleciona o título do glossário
    const OFFSET_FIXO = 100; // Ajuste para garantir que o título fique visível
  
    if (btn) {
      document.body.appendChild(btn);
      console.log("Botão movido para o <body> com sucesso!");
  
      btn.addEventListener("click", function (event) {
        event.preventDefault(); // Evita o comportamento padrão do link
  
        if (tituloGlossario) {
          const tituloPosicao = tituloGlossario.getBoundingClientRect().top + window.scrollY - OFFSET_FIXO;
  
          window.scrollTo({
            top: tituloPosicao,
            behavior: "smooth"
          });
        }
      });
    } else {
      console.log("Erro: botão não encontrado no DOM.");
    }
  });
  