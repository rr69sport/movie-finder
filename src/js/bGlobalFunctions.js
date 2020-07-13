/**
 * Inserta en html un elemento template previamente establecido
 * 
 * @param {string} template - ID del template que va a ser insertado
 * @param {string} insertInto - Elemento en el que será insertado el template
 * @param {boolean} replace - Si se define en true, no quita los hijos existentes. Por defecto en false
 */
const insertTemplate = (template, insertInto, replace = false) => {

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

const removeTemplate = (removeTo) => {

    const elem = document.getElementById(removeTo);
    if (elem) {
        elem.textContent = ''
    }
}

/**
 * Asigna una clase css a "elem", pasado el tiempo asignado, la quita
 * 
 * @param {HTMLElemt} elem - Elemento al que se le quiere asignar la alerta
 * @param {string} attr - Clase de css que se le debe asignar
 * @param {number} timeout - El tiempo que debe pasar antes que la clase css que se asignó, se quite
 */
const alertEmptyField = (elem, attr, timeout, typePassword = false) => {

    if (elem) {

        elem.classList.add(attr)

        if (typePassword) {

            elem.setAttribute('type', 'text')

            elem.value = 'Las contraseñas deben coincidir'

            setTimeout(() => {

                elem.setAttribute('type', 'password')
                elem.value = ''

            }, timeout);
        }

        setTimeout(() => {

            elem.classList.remove(attr)

        }, timeout);

    } else {
        console.error(`La función "alertEmptyField()" dice: El elemento "${elem}" no existe.`);
    }
}

/**
 * A modo de alerta, cambia el placeholder del input
 * Asignando como valor una ayuda visual de lo que necesita hacer.
 * Pasado el tiempo asignado la quita
 * 
 * @param {HTMLElement} elem - Input que se le quiere cambiar el placeholder
 * @param {string} newContent - Lo que se le quiere asignar como nuevo valor
 * @param {string} returnTo - El texto que se mostrará después de pasado el tiempo asignado
 * @param {number} timeout - El tiempo que pasará antes que se muestre el texto final
 */
const changePlaceholderValue = (elem, newContent, returnTo, timeout) => {

    if (elem) {
        elem.placeholder = newContent

        setTimeout(() => {

            elem.placeholder = returnTo

        }, timeout);
    } else {
        console.error(`La función "changePlaceholderValue()" dice: El elemento "${elem}" no existe.`);
    }
}

/**
 * Alterna una clase de css por otra
 * 
 * @param {HTMLElement} elem - ID del elemento que se quiere reemplazar una clase
 * @param {string} oldClass - Clase a reemplazar
 * @param {string} newClass - Clase nueva
 */
const replaceClass = (elem, oldClass, newClass) => {

    if (elem && elem.classList.contains(oldClass)) {

        elem.classList.replace(oldClass, newClass)

    } else {
        console.error(`La función "replaceClass()" dice: El elemento "${elem}" no existe o no tiene la clase "${oldClass}".`);
    }
}

/**
 * Inserta los templates en el html
 * si la constante "isLoggedIn" es true, retorna true
 * sino retirna false
 */
const insertIfLoggedIn = () => {
    if (currentUserLoggedIn()) {
        // Reemplaza la clase de donde se insertan los formularios
        replaceClass(appendForms, 'forms__modal--account', 'forms__modal--search')

        // Inserta el template de búsqueda
        insertTemplate('search-template', 'append-forms', true)

        // Cambia los botones de acceder y registrarse a
        // favoritos y cerrar sesión
        insertTemplate('logged-in-template', 'account', true)

    }
}