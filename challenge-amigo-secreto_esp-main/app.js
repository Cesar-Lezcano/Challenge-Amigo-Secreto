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


function mostrarLista() {
    
    const lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li"); 
        li.textContent = amigos[i]; 
        lista.appendChild(li);
    }

    // Función para sortear un amigo secreto
    function sortearAmigo() {
        
        if (amigos.length === 0) {
            alert("No hay amigos en la lista para sortear.");
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];

        const resultado = document.getElementById("resultado");
        resultado.innerHTML = ` El amigo secreto es: ${amigoSecreto}`;
    }
}