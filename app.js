// Lista de amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const nombre = document.getElementById("nombreAmigo").value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    document.getElementById("nombreAmigo").value = "";

    // Actualizar la lista visual
    actualizarLista();
}

// Función para actualizar la lista de amigos en la página
function actualizarLista() {
    // Obtener el elemento <ul> para mostrar los amigos
    const lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista antes de actualizar usando innerHTML
    lista.innerHTML = "";

    // Iterar sobre el arreglo amigos y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo <li> para cada amigo
        const li = document.createElement("li");
        li.textContent = amigos[i];
        
        // Añadir el <li> a la lista <ul>
        lista.appendChild(li);
    }
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    // Verificar que la lista de amigos no esté vacía
    if (amigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento 'resultado'
    document.getElementById("resultado").innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}
