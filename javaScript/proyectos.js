

fetch("./json/json.json")
.then(response => response.text())
.then(data => {
  const json = JSON.parse(data);
  console.log('descripcion:', json);
  createProyect(json);

});

function createProyect(obj) {
const main = document.querySelector('main');
const parrafoDiv = document.createElement('div');
const parrafo = document.createElement('p');

parrafoDiv.classList.add('fraseProyectos');
parrafoDiv.appendChild(parrafo);
parrafo.textContent = obj.descripcion;
main.appendChild(parrafoDiv);

const contenedor = document.createElement('div');
contenedor.classList.add('contenedorP');
main.appendChild(contenedor);


for (let i = 0; i < obj.proyectos.length; i++) {
    const proyectoDiv = document.createElement('div');
    proyectoDiv.classList.add(`img${i+1}`);

    const link = document.createElement('a');
    link.href = obj.proyectos[i].URL;
    link.target = "_blank";

    contenedor.appendChild(proyectoDiv);
    proyectoDiv.appendChild(link);


 }


}



