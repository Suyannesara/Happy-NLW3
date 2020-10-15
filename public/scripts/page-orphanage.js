/*Criação de uma variavel para impedir que o mapa se mexa*/
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

//Create map
const map = L.map('mapid', options).setView([-27.2280416,-49.6748861], 16);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//Create icon
const icon = L.icon ({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29,68],
  popupAnchor: [170, 2]
})

//Create and add marker
L
.marker([-27.2280416,-49.6748861], {icon})
.addTo(map)


/*Image gallery*/

function selectImage(event){
  const button = event.currentTarget

  //Remove all the .active classes
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button){
    button.classList.remove("active")
  }

  //Select the clicked image
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  //reload the image container 
  imageContainer.src = image.src

  // add the class . active for this button
  button.classList.add('active')
}