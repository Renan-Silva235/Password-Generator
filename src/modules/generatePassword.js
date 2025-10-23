import { lengthPassword, addNumberInPassword, lettersUpperCase, lettersLowerCase, specialCharacters } from "./elementsPassword";
import {validateCheckbox, validateAllCheckbox} from "./validate";

const container = document.querySelector(".container");
const checkboxOfAddNumber = container.querySelector("#add-numbers");
const checkboxofLetterUpper = container.querySelector("#upper-letters");
const checkboxofLetterLower = container.querySelector("#lower-letters");
const checkboxofSpecialCharacter = container.querySelector("#specials-characterers");

/**
 * Gera uma senha aleatória com base nas opções de checkbox marcadas pelo usuário.
 * A senha é gerada com base nas funções de geração de caracteres definidas em elementsPassword.js.
 * Caso nenhuma das opções esteja marcada, uma mensagem de erro é exibida ao usuário.
 * @returns {string} Uma senha aleatória com base nas opções de checkbox marcadas pelo usuário.
 */
export default function generatePassword(){
    let lengthOfPassaword;
    try{
        lengthOfPassaword = lengthPassword();
        validateAllCheckbox(checkboxOfAddNumber.checked,
                            checkboxofLetterUpper.checked,
                            checkboxofLetterLower.checked,
                            checkboxofSpecialCharacter.checked);
    }catch(error){
        alert(error);
    }


    const listGenerateByCharacters = [];

    if(validateCheckbox(checkboxOfAddNumber.checked)){
        listGenerateByCharacters.push(addNumberInPassword);
    }

    if(validateCheckbox(checkboxofLetterUpper.checked)){
        listGenerateByCharacters.push(lettersUpperCase);
    }

    if(validateCheckbox(checkboxofLetterLower.checked)){
        listGenerateByCharacters.push(lettersLowerCase);
    }

    if(validateCheckbox(checkboxofSpecialCharacter.checked)){
        listGenerateByCharacters.push(specialCharacters)
    }

    let passwordCreated = "";

    while(passwordCreated.length < lengthOfPassaword){

        const randomIndex = Math.floor(Math.random() * listGenerateByCharacters.length);
        const randomFunc = listGenerateByCharacters[randomIndex];
        passwordCreated += randomFunc().toString();

    }

    checkboxOfAddNumber.checked = false;
    checkboxofLetterUpper.checked = false;
    checkboxofLetterLower.checked = false;
    checkboxofSpecialCharacter.checked = false;

    return passwordCreated;
}






