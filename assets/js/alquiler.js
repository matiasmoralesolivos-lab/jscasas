const propiedadesAlquiler = [
{
    imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    titulo: "Apartamento en el centro de la ciudad",
    descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    precio: 2000,
    fumar: false,
    mascotas: true
},
{
    imagen: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09",
    titulo: "Apartamento luminoso con vista al mar",
    descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
    direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 3,
    precio: 2500,
    fumar: true,
    mascotas: true
},
{
    imagen: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a",
    titulo: "Condominio moderno en zona residencial",
    descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    precio: 2200,
    fumar: false,
    mascotas: false
}
]

const contenedor = document.querySelector("#contenedor-alquiler")

for (let propiedad of propiedadesAlquiler){

let fumarHTML = propiedad.fumar
? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
: `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`

let mascotasHTML = propiedad.mascotas
? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
: `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`

contenedor.innerHTML += `
<div class="col-md-4 mb-4">
    <div class="card">
        <img src="${propiedad.imagen}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${propiedad.titulo}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}</p>
            <p>
                <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedad.banos} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
            ${fumarHTML}
            ${mascotasHTML}
        </div>
    </div>
</div>
`
}