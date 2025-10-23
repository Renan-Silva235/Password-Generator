import generatePassword from "./generatePassword";

/**
 * Insere um elemento HTML <h1> com a senha gerada no container principal do documento.
 * A senha  gerada pelo m  todo generatePassword() e  exibida no elemento <h1> que tem a classe "password".
 * @returns {void}
 */
export default function insertElementInDoc(){
    const container = document.querySelector(".container");
    let field = container.querySelector("#field");
    field.innerHTML = "";
    const creaTagElement = document.createElement("h1");
    const createClass = creaTagElement.classList.add("password");
    let password = generatePassword();
    creaTagElement.innerHTML = password;
    field.appendChild(creaTagElement);
}
