import insertElementInDoc from "./modules/addElementDoc";
import "./assets/css/style.css";
import clean from "./modules/cleanDocument";
const container = document.querySelector(".container");

/**
 * Inicializa o programa, adicionando eventos de submit e click em seus respectivos elementos.
 * O evento de submit chama a função insertElementInDoc(), que insere um elemento HTML <h1> com a senha gerada no container principal do documento.
 */
function runProgramm(){
    const form = container.querySelector("form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        insertElementInDoc();
    });

    const reset = container.querySelector("#reset");
    reset.addEventListener("click", () => {
        container.querySelector(".password").remove();
    });
}


runProgramm();
