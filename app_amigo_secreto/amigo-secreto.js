// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNombre = document.getElementById("nombre");
    let nombre = inputNombre.value.trim();

    // Validar la entrada: Verificar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar si el nombre ya está en la lista
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Actualizar la lista visualmente
    actualizarLista();

    // Limpiar el campo de entrada
    inputNombre.value = "";
    inputNombre.focus();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    let listaNombres = document.getElementById("lista-nombres");
    listaNombres.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Iterar sobre el array amigos y agregar cada nombre a la lista
    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya al menos dos nombres en la lista
    if (amigos.length < 2) {
        alert("Debes ingresar al menos dos nombres para hacer el sorteo.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let nombreSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la interfaz
    document.getElementById("resultado").innerHTML = `🎉 ¡El amigo secreto es: <strong>${nombreSorteado}</strong>! 🎁`;
}

// Eventos para los botones
document.getElementById("agregar").addEventListener("click", agregarAmigo);
document.getElementById("sortear").addEventListener("click", sortearAmigo);
