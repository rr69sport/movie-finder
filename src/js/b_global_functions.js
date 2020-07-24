const insertIfExistsUser = () => {

    // Cambia el botón de acceder por
    // el de cerrar sesión y favoritos
    insertTemplateInto('logged-in-template', 'profile', true)

    // Inserta el formulario de búsqueda
    insertTemplateInto('search-form-template', 'append-forms', true)

    // Reemplaza la clase del contenedor
    // del template de búsqueda 
    replaceClass('append-forms', 'append-forms--profile', 'append-forms--search')
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

/**
 * Crea un elemento a modo de mensaje de alerta
 * 
 * @param {string} elem - Etiqueta HTML a crear
 * @param {string} messagge - Texto a insertar
 * @param {array} arrayClass - Array de clases css
 * @param {string} appendTo - Elemento padre en el HTML (NO usar variable global)
 */
const createElemForAlert = (elem, messagge, arrayClass, appendTo) => {

    const el = document.createElement(elem.toUpperCase())
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