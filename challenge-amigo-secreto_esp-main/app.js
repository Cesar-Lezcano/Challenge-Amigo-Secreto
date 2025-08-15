let amigos = [];

function agregarAmigo() {
    
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();


    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);

    input.value = "";

    console.log(amigos); // Para verificar que se va guardando correctamente
    
    mostrarLista();

}


// Función para mostrar la lista de amigos en la página
function mostrarLista() {
    
    const lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li"); // Crear un <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo
        lista.appendChild(li); // Agregar <li> a la lista
    }
}
