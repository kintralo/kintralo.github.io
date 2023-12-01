document.addEventListener("DOMContentLoaded", function () {
    const listaRepositorios = document.getElementById("lista-repositorios");

    fetch("https://api.github.com/users/kintralo/repos")
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description}`;
                listaRepositorios.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error al obtener repositorios", error));
});