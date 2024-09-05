class Experiencia {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Crear una instancia de Carrito
class Carrito {
    constructor() {
        this.items = []; // Array para almacenar las experiencias
    }

    añadirExperiencia(experiencia) {
        this.items.push(experiencia);
        this.actualizarInterfaz();
    }

    eliminarExperiencia(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
            this.actualizarInterfaz();
        }
    }

    calcularTotal() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].precio;
        }
        return total;
    }

    actualizarInterfaz() {
        const lista = document.getElementById('elementos-carrito');
        lista.innerHTML = ''; // Limpiar la lista actual

        this.items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - $${item.precio}`;
            
            const eliminarBtn = document.createElement('button');
            eliminarBtn.textContent = 'Eliminar';
            eliminarBtn.onclick = () => this.eliminarExperiencia(index);
            
            li.appendChild(eliminarBtn);
            lista.appendChild(li);
        });

        document.getElementById('total').textContent = this.calcularTotal();
    }
}

// Crear una instancia del carrito
const carrito = new Carrito();

// Función para manejar el click en el botón de añadir al carrito
function añadirAlCarrito(event) {
    const divExperiencia = event.target.parentElement;
    const nombre = divExperiencia.querySelector('h3').textContent;
    const precio = parseFloat(divExperiencia.getAttribute('data-precio'));

    const experiencia = new Experiencia(nombre, precio);
    carrito.añadirExperiencia(experiencia);
}

// Añadir event listeners a los botones de añadir al carrito
document.querySelectorAll('.añadir-al-carrito').forEach(button => {
    button.addEventListener('click', añadirAlCarrito);
});