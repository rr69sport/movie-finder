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
const alertEmptyField = (elem, attr, timeout) => {

    if (elem) {

        elem.classList.add(attr)

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
 * @param {string} element - ID del elemento que se quiere reemplazar una clase
 * @param {string} oldClass - Clase a reemplazar
 * @param {string} newClass - Clase nueva
 */
const replaceClass = (element, oldClass, newClass) => {

    const elem = document.getElementById(element)

    if (elem && elem.classList.contains(oldClass)) {

        elem.classList.replace(oldClass, newClass)

    } else {
        console.error(`La función "replaceClass()" dice: El elemento "${elem}" no existe o no tiene la clase "${oldClass}".`);
    }
}


const insertIfExistsUser = () => {
    // Cambia el botón de acceder por
    // el de cerrar sesión y favoritos
    insertTemplate('logged-in-template', 'profile', true)

    // Inserta el template de búsqueda
    insertTemplate('search-form-template', 'append-forms', true)

    // Reemplaza la clase del contenedor
    // del template de búsqueda 
    replaceClass('append-forms', 'forms__modal--account', 'forms__modal--search')
}

const createElemForAlert = (elem, messagge, arrayClass, appendTo) => {

    const el = document.createElement(elem)
    const append = document.getElementById(appendTo);

    arrayClass.forEach(addClass => {
        el.classList.add(addClass)
    });

    el.textContent = messagge


    append.appendChild(el)

    setTimeout(() => {
        append.textContent = ''
    }, time);
}