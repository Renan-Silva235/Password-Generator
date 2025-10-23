export function validateCheckbox(checkbox){
    return checkbox === true;
}

/**
 * Valida se pelo menos uma das checkboxes est  marcada.
 * Se nenhuma estiver marcada, uma mensagem de erro  exibida ao usu rio.
 * @param  {...checkbox} - Checkbox(es) a ser(em) validada(s)
 * @returns {boolean} - true se ao menos uma checkbox estiver marcada, caso contrário, uma mensagem de erro  exibida
 * @throws {Error} - Caso nenhuma das checkboxes esteja marcada
 */
export function validateAllCheckbox(...checkbox){
    const hasAtLeastOneChecked = checkbox.some(cb => cb === true);
    if(!hasAtLeastOneChecked){
        throw new Error("Por favor, marque pelo menos uma opção!");
    }

    return true;
}


