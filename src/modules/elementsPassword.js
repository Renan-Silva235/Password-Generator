const container = document.querySelector(".container");

/**
 * Retorna o valor do campo de input com id "amount-characters" que representa o tamanho da senha a ser gerada.
 * Caso o campo esteja vazio, lança um erro com a mensagem "Por favor, defina o tamanho que ser  a sua senha!".
 * @returns {string} O valor do campo de input com id "amount-characters".
 * @throws {Error} Caso o campo esteja vazio.
 */
export function lengthPassword(){
    const getAmountOfPassword = container.querySelector("#amount-characters");
    if(getAmountOfPassword.value === ""){
        throw new Error("Por favor, defina o tamanho que será a sua senha!");
    }
    return getAmountOfPassword.value;
}


/**
 * Gera um número aleatório entre 0 e 9.
 * @returns {number} Um número aleatório entre 0 e 9.
 */
export function addNumberInPassword(){
    let min = 0;
    let max = 9;
    let randomNumbers = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumbers;
}

/**
 * Gera uma letra aleatória maiúscula entre A e Z.
 * @returns {string} Uma letra aleatória maiúscula entre A e Z.
 */
export function lettersUpperCase() {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

/**
 * Gera uma letra aleatória minúscula entre a e z.
 * @returns {string} Uma letra aleatória minúscula entre a e z.
 */
export function lettersLowerCase() {
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

/**
 * Gera um caractere especial aleatório entre ["@", "#", "&", "$"].
 * @returns {string} Um caractere especial aleatório entre ["@", "#", "&", "$"].
 */
export function specialCharacters() {
    const characters = ["@", "#", "&", "$"];
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function showMessage(text) {
    const container = document.querySelector(".container");
    const divShowMessage = container.querySelector("#showMessageCopy");
    const msg = document.createElement("p");
    msg.textContent = text;
    msg.classList.add("message");
    divShowMessage.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 2000);
}



export default function buttonCopyPassword(){
    const copyButton = document.querySelector(".copy-button");
    copyButton.addEventListener("click", () => {
        const passwordElement = document.querySelector(".password");
        if (!passwordElement) return;


        const password = passwordElement.textContent;
        navigator.clipboard.writeText(password)
            .then(() => {
                showMessage("Senha copiada com sucesso!");
            })
            .catch(() => {
                showMessage("Erro ao copiar a senha!");
            });
        });
}



