function getCharacterInfo() {
    const characterInput = document.getElementById("character")
    const characterInfo = document.getElementById("characterInfo")

    const character = characterInput.value.toLocaleLowerCase()

    fetch (`http://localhost:3000/characters/${character}`)
    .then(response => response.json())
    .then (data => {
        const {name, status, species, gender, origin, image} = data
        characterInfo.innerHTML= `
            <h2>${name}</h2>
            <img src="${image}" alt="${name}"/>
            <p>Status: ${status}</p>
            <p>Species: ${species}</p>
            <p>Gender: ${gender}</p>
            <p>Origin: ${origin.name}</p>
            `
    })
    .catch(error => characterInfo.innerHTML = `<p>Imposible acceder al personaje</p>`)
}