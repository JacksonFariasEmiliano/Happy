//create map
const map = L.map('mapid').setView([-27.219094, -49.646736], 16);

// creat add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({

    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;


    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng

    //remover icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map);
})



//add field photos
function addPhotoField() {
    //pegar o container de fotos #id='images'
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultma imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo esta vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
   const span = event.currentTarget

   const fieldsContainer = document.querySelectorAll('.new-upload')

   if(fieldsContainer.length <= 1) {
    //limpar o valor do campo   
    span.parentNode.children[0].value =""
    return
   }

   //deletar o campo
   span.parentNode.remove();
}


//select yes or not
function toggleSelect(){

    // retirar a class .active (dos botoões)
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })

    //colocar a class .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    //verificar se sim ou nao
    input.value = button.dataset.value
    
    
}
