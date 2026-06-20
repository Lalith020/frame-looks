document.addEventListener("DOMContentLoaded", function() {
    const campoBusca = document.getElementById("campo-busca");
    const btnBusca = document.getElementById("btn-busca");
    const cardsPersonagem = document.querySelectorAll(".look-card");

    function filtrarPersonagens() {
        const termoPesquisa = campoBusca.value.toLowerCase().trim();

        cardsPersonagem.forEach(card => {
            const nomePersonagem = card.getAttribute("data-personagem");
            if (termoPesquisa === "" || nomePersonagem.includes(termoPesquisa)) {
                card.style.display = "block"; 
            } else {
                card.style.display = "none";
            }
        });
    }

    // Filtra ao clicar no botão buscar
    btnBusca.addEventListener("click", filtrarPersonagens);

    // Filtra ao apertar a tecla Enter
    campoBusca.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            filtrarPersonagens();
        }
    });

    // Rolagem suave ao clicar em "Explorar Vitrine"
    const btnExplorar = document.getElementById("btn-explorar");
    btnExplorar.addEventListener("click", function() {
        document.getElementById("vitrine").scrollIntoView({ behavior: "smooth" });
    });
});