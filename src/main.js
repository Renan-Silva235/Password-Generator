import insertElementInDoc from "./modules/addElementDoc";
import "./assets/css/style.css";
import buttonCopyPassword from "./modules/elementsPassword";
const container = document.querySelector(".container");

/**
 * Fun o principal do programa.
 * Adiciona os eventos de "submit" e "click" nos elementos
 * "form" e "reset" respectivamente.
 * Adiciona tamb m o evento de "click" no elemento "copy-button"
 * para copiar a senha gerada.
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

    buttonCopyPassword();
}


runProgramm();
