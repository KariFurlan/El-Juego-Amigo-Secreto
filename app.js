// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Ingresar un nombre válido");
        return;
    }

    if (listaDeAmigos.includes(nombreAmigo)) {
        alert("Este nombre ya existe");
        inputAmigo.value = "";
        return;
    }

    listaDeAmigos.push(nombreAmigo);
    //mostrarListaAmigos();
    inputAmigo.value = "";
    mostrarListaAmigos();
    //inputAmigo.focus();
}

function mostrarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    listaDeAmigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function actualizarLista() {
    const listaAmigoUl = document.getElementById("listaAmigo");
    listaAmigoUl.innerHTML = "";

    listaDeAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Debe agregar nombres para sortear un amigo");
        return
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    const amigoSorteado = listaDeAmigos[indiceAleatorio];

    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;

    setTimeout(reiniciarJuego, 5000);
}

function reiniciarJuego() {
    listaDeAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    //document.getElementById("amigo").value = "";
    alert("Se reinició el juego, podes comenzar de nuevo");
    
}



/*
let listaDeAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
       
    if (nombre === "") {
       alert("Ingresar un nombre válido");
       return;
    }

    if (listaDeAmigos.incluedes(nombre)) {
        alert("Este nombre ya existe");
        input.value = "";
        return
    }

    listaDeAmigos.push(nombre);
    mostrarListaAmigos();
    input.value = "";
}

function mostrarListaAmigos() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaDeAmigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (listaDeAmigos.length === 0) {
        resultado.innerHTML = "Debe agregar un nombre para sortear un amigo";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreSorteado = listaDeAmigos[indiceAleatorio];

    listaDeAmigos.splice(indiceAleatorio, 1);

    const li = document.createElement("li");
    li.innerHTML = "El amigo secreto es: <strong>${nombreSorteado}</strong";
    resultado.appendChild(li);

    mostrarListaAmigos();
}

function reiniciarJuego() {
    listaDeAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
    alert("Se reinició el juego, podes comenzar de nuevo");
}
*/