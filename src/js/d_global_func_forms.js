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
 * A modo de alerta, cambia el placeholder del input,
 * asignando como valor una ayuda visual de lo que necesita hacer.
 * Pasado el tiempo asignado vuelve a su estado normal
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
