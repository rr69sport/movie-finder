/**
 * Inserta en el html un elemento template previamente establecido
 * 
 * @param {string} template - ID del template que va a ser insertado
 * @param {string} insertInto - Elemento en el que será insertado el template
 * @param {boolean} replace - Si se define en true, no quita los hijos existentes. Por defecto en false
 */
const insertTemplateInto = (template, insertInto, replace = false) => {

    const templateForm = document.getElementById(template);
    const insertIn = document.getElementById(insertInto);

    if (templateForm && insertIn) {

        const form = document.importNode(templateForm.content, true);

        if (replace) {
            insertIn.textContent = ''
        }
        insertIn.appendChild(form)
    } else {
        console.error(`La función insertTemplate() dice: El elemento ${template} o ${insertInto} no existen.`);
    }
}

/**
 * Remueve los hijos de un componente
 * 
 * @param {string} removeTo - ID tal cual se escribió en el html
 */
const removeComponentsFrom = (removeTo) => {

    const elem = document.getElementById(removeTo);

    if (elem) {
        elem.textContent = ''
    }
}