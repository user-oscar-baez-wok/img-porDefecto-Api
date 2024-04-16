//Codigo para colocar una imagen por defecto de una propiedad de imagen en una API con JavaScript
const drawCharacter2 = (results) => {
  results.map((character) => {
    const imagen = character.image;
    const newImage = imagen ? imagen : "./img/baff.png";
    container.innerHTML += `
                      <img src="${newImage}" alt="">
                      <h1>${character.name}</h1>
                      <p>${character.status}</p>
                      <hr>
              `;
  });
};
